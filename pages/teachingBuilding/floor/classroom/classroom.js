// pages/classroom/xingXiang/6F/601.js
var app = getApp();
var dataUtil = require('../../../../data/publicData.js');
var util = require('../../../../utils/util.js');
import { formatTime } from '../../../../utils/util'

Page({
  data: {
    date: formatTime(new Date()).split(' ')[0],
    classSize: 20,
    tableNum: ["1", "2", "3", "4", "5"],
    seatId: ["1", "2", "3", "4", "5", "6",],
    timeId: ["08:00~09:00", "09:00~10:00", "10:00~11:00", "11:00~12:00", "12:00~13:00", "13:00~14:00", "14:00~15:00", "15:00~16:00", "16:00~17:00", "17:00~18:00", "18:00~19:00", "19:00~20:00", "20:00~21:00", "21:00~22:00"],
  },
  //预定座位信息页面
  Y: function (e) {
    var that = this;
    var seatIdx = e.currentTarget.dataset.seatidx;//座位
    var timePeiodIdx = e.currentTarget.dataset.timepeiodidx;//时段
    var tableIdx = e.currentTarget.dataset.tablenum;//表格号（第几组）
    var temp = that.data.temp;
    wx.showModal({
      title: '提示',
      content: "确定预约这个座位?",
      success: function (res) {
        if (res.confirm) {
          temp[that.data.floorIdx][that.data.roomIdx][tableIdx][seatIdx][timePeiodIdx] = 'N'
          that.setData({ temp: temp })
          wx.showModal({
            content: '恭喜你，预订成功~o(*￣▽￣*)o',
            showCancel: false,
          })
        }
      }
    })
  },
  N: function () {
    wx.showModal({
      content: '该座位已被预约，下次趁早~o(*￣▽￣*)o',
      showCancel: false,
    })
  },
  S: function () {
    wx.showModal({
      content: '该座位已过期，下次趁早~o(*￣▽￣*)o',
      showCancel: false,
    })
  },
  timeSelected: function (e) {
    var that = this;
    var timeIdx = e.currentTarget.dataset.timeidx;
    var temp = that.data.temp;
    var test = 0;
    var floorIdx = that.data.floorIdx;
    var roomIdx = that.data.roomIdx;
    var floor = ['6', '5', '4', '3', '2', '1'];
    for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
      for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
        var img = that.data.temp[floorIdx][roomIdx][tableIdx][seatIdx][timeIdx];
        if (img == 'N') {
          wx.showModal({
            content: '该教室有人自习，不适合班集体使用',
            showCancel: false,
            success: function (rer) {
              test = 1
            }
          })
          return
        }
        temp[floorIdx][roomIdx][tableIdx][seatIdx][timeIdx] = 'N'
      }
    }
    if (test == 0) {
      wx.showModal({
        title: '提示',
        content: '确定在' + that.data.timeId[timeIdx] + '预约' + floor[floorIdx] + 'F-' + floor[floorIdx] + '0' + (roomIdx + 1) + '教室?',
        success: function (res) {
          if (res.confirm) {
            that.setData({ temp: temp })
            wx.showModal({
              content: '成功预定,' + '祝学习愉快~o(*￣▽￣*)o',
              showCancel: false,
            })
          }
        }
      })
    }
  },
  onLoad: function (options) {
    var list = wx.getStorageSync('list')
    console.log(list)
    var buildingIdx = parseInt(options.buildingIdx) + 1;
    var floorIdx = options.floorIdx;//floor
    var roomIdx = parseInt(options.roomIdx);//floor
    var temp = list[buildingIdx]//temp可以是library/yiFu/sanJiao等
    var teachingBuilding = ['图书馆', '逸夫楼', '兴湘', '文科楼', '二教', '一教'];
    var floor = ['6', '5', '4', '3', '2', '1'];

    wx.setNavigationBarTitle({
      title: teachingBuilding[buildingIdx] + "-" + floor[floorIdx] + 'F-' + floor[floorIdx] + '0' + (roomIdx + 1) + '教室',
    })
    var timeHour = formatTime(new Date()).split(' ')[2];
    var timeMinute = formatTime(new Date()).split(' ')[4];
    // 过了晚上十点，预定日期自动跳到第二天
    if (timeHour >= 9) {
      var date = formatTime(new Date()).split(' ')[3];
    }
    if (timeMinute >= 30) {
      var timePeiodIdx = timeHour - 8;
      var dateArr=temp[floorIdx]
      console.log(dateArr)
      console.log(roomIdx)
      for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
        for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
          if(dateArr[roomIdx][tableIdx][seatIdx][timePeiodIdx] ==='Y'){
          dateArr[roomIdx][tableIdx][seatIdx][timePeiodIdx] = 'S';//stop
          }
        }
      }
    }
    util.loop(temp, roomIdx, floorIdx, timeHour, "date");
    this.setData({
      temp: temp,
      floorIdx: floorIdx,
      roomIdx: roomIdx,
    })
  },
})