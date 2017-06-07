// pages/index/violation.js
var app = getApp();
var dataUtil = require('../../../../data/publicData.js');
var util = require('../../../../utils/util.js');
import { formatTime } from '../../../../utils/util'
Page({
  data: {
    remind: false,
    array: ['图书馆', '逸夫楼', '兴湘', '三教', '二教', '一教'], arrayLou: ['六楼', '五楼', '四楼', '三楼', '二楼', '一楼'],
    arrayRoom: ['01', '02', '03', '04', '05', '06'],
    index: 0,
    indexLou: 0,
    indexRoom: 0,
    time: parseInt(formatTime(new Date()).split(' ')[1].substring(0, 2))

  },
  bindPickerChange: function (e) {
    var that = this;
    var houRoom = this.data.houBuilding[e.detail.value] + this.data.indexLou + this.data.indexRoom;
    wx.request({
      url: 'http://localhost:8888/api/classroom?room=' + houRoom,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      success: function (res) {
        var roomData = res.data.data;
        that.setData({
          roomData: roomData,
          houRoom: houRoom,
        })
      },
      fail: function (res) {
        console.log('fail')
      }
    })
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangeLou: function (e) {
    var that = this;
    var houRoom = this.data.houBuilding[this.data.index] + e.detail.value + this.data.indexRoom;
    wx.request({
      url: 'http://localhost:8888/api/classroom?room=' + houRoom,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      success: function (res) {
        var roomData = res.data.data;
        that.setData({
          roomData: roomData,
          houRoom: houRoom,
        })
      },
      fail: function (res) {
        console.log('fail')
      }
    })
    this.setData({
      indexLou: e.detail.value
    })
  },
  bindPickerChangeRoom: function (e) {
    var that = this;
    if (this.data.list[this.data.index][this.data.indexLou][e.detail.value] === undefined) {
      this.setData({
        remind: true,
      })
    }
    else {
      var houRoom = this.data.houBuilding[this.data.index] + this.data.indexLou + e.detail.value;
      wx.request({
        url: 'http://localhost:8888/api/classroom?room=' + houRoom,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: "GET",
        success: function (res) {
          var roomData = res.data.data;
          that.setData({
            roomData: roomData,
            houRoom: houRoom,
          })
        },
        fail: function (res) {
          console.log('fail')
        }
      })
      this.setData({
        remind: false,
        indexRoom: e.detail.value
      })
    }
  },
  N: function (e) {
    var that = this;
    var list = that.data.list;
    var tableIdx = e.currentTarget.dataset.tableidx;
    var seatNum = e.currentTarget.dataset.seatnum;
    var seatIdx = e.currentTarget.dataset.seatidx;
    var index = that.data.index;
    var indexLou = that.data.indexLou;
    var indexRoom = that.data.indexRoom;
    var roomData = this.data.roomData;
    var time = that.data.time;
    wx.showModal({
      title: '提示',
      content: "确定" + this.data.array[this.data.index] + this.data.arrayLou[this.data.indexLou] + this.data.arrayRoom[this.data.indexRoom] + '教室' + tableIdx + '-' + (seatNum + 1) + "座位未被使用?",


      //当前点击项的id
      success: function (res) {
        if (res.confirm) {
          roomData[seatIdx]['times'][0][time][0]['type'] = 'Y'
          console.log(roomData)
          console.log(roomData[seatIdx]['times'][0][time]['type'])
          that.setData({ roomData: roomData })
          wx.request({
            url: 'http://localhost:8888/api/classroom?houRoom=' + that.data.houRoom + '&roomDataIdx=' + seatIdx + '&tableIdx=' + (tableIdx - 1) + '&seatIdx=' + seatNum + '&timePeiodIdx=' + time + '&status=Y',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            data: {
              "username": "",
              "recentBook": "",
            },
            success: function (res) {
              that.setData({
              })
              console.log(that.data.libraryTest)
            },
            fail: function (res) {
              console.log('fail')
            }
          })
        }
      }
    })
  },
  Y: function () {
    wx.showModal({
      content: '无人选择该座位',
      showCancel: false,
    })
  },
  onLoad: function (options) {
    var that = this;
    var buildingIdx = that.data.index;
    var floorIdx = that.data.indexLou;
    var roomIdx = that.data.indexRoom;
    var houBuilding = ['library', 'yifu', 'xingxiang', 'wenke', 'erjiao', 'yijiao']
    var houRoom = houBuilding[buildingIdx] + floorIdx + roomIdx;
    wx.request({
      url: 'http://localhost:8888/api/classroom?room=' + houRoom,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      success: function (res) {
        var roomData = res.data.data;
        that.setData({
          roomData: roomData,
          houRoom: houRoom,
          houBuilding: houBuilding,
          floorIdx: floorIdx,
          roomIdx: roomIdx,
          buildingIdx: buildingIdx,
        })
      },
      fail: function (res) {
        console.log('fail')
      }
    })
    var list = wx.getStorageSync('list')
    this.setData({
      list: list
    });
  }
})