var app = getApp();
var dataUtil = require('../../../../data/publicData.js');
var util = require('../../../../utils/util.js');
import { formatTime } from '../../../../utils/util'
Page({
  data: {
    time: formatTime(new Date()).split(' ')[1],
    timeEnd: formatTime(new Date()).split(' ')[1],
    date: formatTime(new Date()).split(' ')[0],
    dateEnd: formatTime(new Date()).split(' ')[0],
    startDate: formatTime(new Date()).split(' ')[0],
    endDate: formatTime(new Date()).split(' ')[2],
    array: ['图书馆', '逸夫楼', '兴湘', '三教', '二教', '一教'],
    arrayLou: ['六楼', '五楼', '四楼', '三楼', '二楼', '一楼'],
    arrayRoom: ['01', '02', '03', '04', '05', '06'],
    arrayPeriod: ['仅上午', '仅下午', '全天'],
    objectArray: [
      {
        id: 0,
        name: '图书馆'
      },
      {
        id: 1,
        name: '兴湘'
      },
      {
        id: 2,
        name: '逸夫楼'
      },
      {
        id: 3,
        name: '一教'
      }, {
        id: 4,
        name: 'yi教'
      },
      {
        id: 5,
        name: 'yi教'
      }
    ],
    index: 0,
    indexLou: 0,
    indexRoom: 0,
    indexPeriod: 0,
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChangeEnd: function (e) {
    this.setData({
      dateEnd: e.detail.value
    })
  },
  bindTimeChangeEnd: function (e) {
    this.setData({
      timeEnd: e.detail.value
    })
  },
  bindPeriodChange: function (e) {
    this.setData({
      indexPeriod: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    // console.log('picker发送选择改变，携带值为', array[e.detail.value])
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangeLou: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexLou: e.detail.value
    })
  },
  bindPickerChangeRoom: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexRoom: e.detail.value
    })
  },
  confirmInfoAdmin: function () {
    var that = this;
    var library = that.data.library;
    var list=that.data.list;
    var index=that.data.index;
    var indexLou=that.data.indexLou;
    var indexRoom=that.data.indexRoom;
    var temp=list[index]
    console.log(temp)
    wx.showModal({
      title: '提示',
      content: "确定" + that.data.date + that.data.arrayPeriod[that.data.indexPeriod] + '，' + that.data.array[that.data.index] + that.data.arrayLou[that.data.indexLou] + that.data.arrayRoom[that.data.indexRoom] + "教室的状态为不可用?",
      success: function (res) {
        if (res.confirm) {
          if (that.data.indexPeriod == 0 || that.data.indexPeriod == 2) {
            console.log('woshi0')
            for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
              for (var idx1 = 0; idx1 < 6; idx1++) {
                for (var idxPeriod = 0; idxPeriod < 6; idxPeriod++) {
                  temp[indexLou][indexRoom][tableIdx][idx1][idxPeriod] = 'S';//stop
                  console.log(temp)
                }
              }
            }
          }
          if (that.data.indexPeriod == 1 || that.data.indexPeriod == 2) {
            for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
              for (var idx1 = 0; idx1 < 6; idx1++) {
                for (var idxPeriod = 6; idxPeriod < 14; idxPeriod++) {
                  temp[indexLou][indexRoom][tableIdx][idx1][idxPeriod] = 'S';//stop
                }
              }
            }
          }
          list[that.data.index]=temp
          that.setData({ temp: temp })
          wx.setStorage({
            key: 'list',
            data: list,
          })
        }
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var list = wx.getStorageSync('list')
    var library = list[0]
    // var library = dataUtil.publicData[0];
    this.setData({
      library: library,
      list,list
    });
  }

})