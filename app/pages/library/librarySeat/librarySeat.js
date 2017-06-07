var app = getApp();
var dataUtil = require('../../../data/publicData.js');
var util = require('../../../utils/util.js');
import { formatTime } from '../../../utils/util'

Page({
  data: {
    floorIdx: 0,
    floor: "",
    timeReturn: formatTime(new Date()).split(' '),
    date: formatTime(new Date()).split(' ')[0],
    time: formatTime(new Date()).split(' ')[1],
    tableNum: ["1", "2", "3", "4", "5"],
    seatId: ["1", "2", "3", "4", "5", "6",],
    timeId: ["08:00~09:00", "09:00~10:00", "10:00~11:00", "11:00~12:00", "12:00~13:00", "13:00~14:00", "14:00~15:00", "15:00~16:00", "16:00~17:00", "17:00~18:00", "18:00~19:00", "19:00~20:00", "20:00~21:00", "21:00~22:00"],
  },
  //预定座位信息页面
  Y: function (e) {
    var that = this;
    var seatIdx = e.currentTarget.dataset.seatidx;
    var timePeriodIdx = e.currentTarget.dataset.timeperiodidx;
    var tableIdx = e.currentTarget.dataset.tablenum;
    var library = that.data.library;
    var img = library[that.data.floorIdx][0][tableIdx][seatIdx][timePeriodIdx];
    var list = that.data.list
    wx.showModal({
      title: '提示',
      content: "确定预约这个座位?",
      success: function (res) {
        if (res.confirm) {
          if (img == "Y") {
            img = "N"
          }
          else {
            img = "Y"
          }
          library[that.data.floorIdx][0][tableIdx][seatIdx][timePeriodIdx] = img
          that.setData({
            library: library,
            timePeriodIdx: timePeriodIdx
          })
          list[0] = library
          wx.setStorage({
            key: 'list',
            data: list,
          })
          console.log(list)
          wx.showModal({
            content: '恭喜你，预订成功~o(*￣▽￣*)o',
            showCancel: false,
          })
          var user=wx.getStorageSync('user')
          console.log(user)
          var recentBook=user.recentBook;
          recentBook={
            bookDate:that.data.timeReturn[0],
            bookTime:that.data.timeId[that.data.timePeriodIdx],
            bookPlace:"图书馆-" + that.data.floor,
          }
          user.recentBook=recentBook;
          wx.setStorage({
            key: 'user',
            data: user,
          })
          console.log(user)
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
  loop: function (dateArr, roomIdx, timeHour, ) {
    for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
      for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
        for (var timePeriodIdx = 0; timePeriodIdx < (timeHour - 8); timePeriodIdx++) {
          dateArr[roomIdx][tableIdx][seatIdx][timePeriodIdx] = 'S';//stop
        }
      }
    }
  },
  test: function (library,floorIdx,floor) {
    var timeHour = formatTime(new Date()).split(' ')[2];
    var timeMinute = formatTime(new Date()).split(' ')[4];
    if (timeHour >= 22) {
      var date = formatTime(new Date()).split(' ')[3];
    }
    //避免全部变成s 导致不能测试
    if (8 <= timeHour && timeHour < 22) {
      // console.log(library)
      console.log(library[floorIdx])
      this.loop(library[floorIdx], 0, timeHour);
    }
    if (timeMinute >= 30) {
      var timePeriodIdx = timeHour - 8;
      var roomIdx = 0;
      var dateArr = library[floorIdx]
      for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
        for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
          if (dateArr[roomIdx][tableIdx][seatIdx][timePeriodIdx] === 'Y') {
            dateArr[roomIdx][tableIdx][seatIdx][timePeriodIdx] = 'S';//stop
          }
        }
      }
    }

    this.setData({
      floorIdx: floorIdx,
      floor: floor,
      library: library,
      date: date, // 过了晚上十点，预定日期自动跳到第二天
    })
  },
  onLoad: function (options) {
    var that=this;
    console.log(options)
    var floorIdx = parseInt(options.floorIdx);
    console.log(typeof (floorIdx));

    var floor = options.floor;
    console.log(floor)
    // var list=wx.getStorageSync('list')
    wx.request({
      url: 'http://localhost:8888/api/publicData?building=library',
      success: function (res) {
        var library = {};
        library[0] = res.data.data;
        console.log(library[0])
        console.log(library)
        // console.log(list)
        
        that.test(library,floorIdx,floor);
      },
      fail: function () {
        console.log('fail')
      }
    })
    wx.setNavigationBarTitle({
      title: "图书馆-" + this.data.floor,
    })
  },
  
  
})
