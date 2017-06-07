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
      console.log(app.appData.userInfo);
      if (app.appData.userInfo != null) {
        var userInfo = app.appData.userInfo;        
        var roomDataIdx = tableIdx * 6 + seatIdx;
        var roomData = this.data.roomData;
        var houRoom = this.data.houRoom;
        var username = userInfo.username;
        var failTimes = app.appData.userInfo.failTimes;        
        if (failTimes == 0) {        
        wx.showModal({
          title: '提示',
          content: "确定预约这个座位?",
          success: function (res) {
            if (res.confirm) {
              console.log('roomdataidx' + roomDataIdx);
              console.log('tableIdx' + tableIdx);
              console.log('seatidx' + seatIdx);
              console.log('timePeIodIdx' + timePeiodIdx)
              roomData[roomDataIdx]['times'][0][timePeiodIdx][0]['type'] = 'N'
              console.log(roomData)
              console.log(roomData[roomDataIdx]['times'][0][timePeiodIdx]['type'])
              that.setData({ roomData: roomData })
              var bookPlace = that.data.place + " " + (tableIdx + 1) + "-" + (seatIdx + 1) + "座位";
              console.log(bookPlace);
              wx.showModal({
                content: '恭喜你，预订成功~o(*￣▽￣*)o',
                showCancel: false,
              })
              wx.request({
                url: 'http://localhost:8888/api/classroom?houRoom=' + houRoom + '&roomDataIdx=' + roomDataIdx + '&tableIdx=' + tableIdx + '&seatIdx=' + seatIdx + '&timePeiodIdx=' + timePeiodIdx + '&status=N',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                method: "POST",
                data: {
                  "username": username,
                  "bookDate": that.data.date,
                  "bookTime": that.data.timeId[timePeiodIdx - 8],
                  "bookPlace": bookPlace,
                },
                success: function (res) {
                },
                fail: function (res) {
                  console.log('fail')
                }
              })
            }
          }
        })
      }
        else if (failTimes == 1 || failTimes == 2) {
          wx.showModal({
            title: '提示',
            content: '因违规一次，停止预约功能一天！',
          })
        }
        else if (failTimes == 3) {
          wx.showModal({
            title: '提示',
            content: '因累积违规三次，停止预约功能十天！',
          })
        }
      } else {
        wx.redirectTo({
          url: '../../../info/login/login',
        })
      }
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
    var userInfo = app.appData.userInfo;
    var username = userInfo.username;
    console.log(userInfo)
    if (userInfo != null) {
      if (userInfo.infoType == "teacher") {
        if (that.data.buildingIdx == 0) {
          wx.showModal({
            title: '提示',
            content: '图书馆不能集体预约座位',
          })
          return;
        }
        var timeIdx = e.currentTarget.dataset.timeidx;
        var roomData = that.data.roomData;
        var test = 0;
        var floorIdx = that.data.floorIdx;
        var roomIdx = that.data.roomIdx;
        var houRoom = this.data.houRoom;
        // var roomDataIdx = tableIdx * 6 + seatIdx;
        var timePeiodIdx = e.currentTarget.dataset.timepeiodidx;//时段 
        console.log(timePeiodIdx)
        var floor = ['6', '5', '4', '3', '2', '1'];
        // for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
        // for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
        // console.log(that.data.roomData[0]["times"][0]["8"][0]["type"])times.0.21.0.type
        // roomData[roomDataIdx]['times'][0][timePeiodIdx][0]['type'] = 'N'
        for (var roomDataIdx = 0; roomDataIdx < roomData.length; roomDataIdx++) {
          var img = roomData[roomDataIdx]['times'][0][timePeiodIdx][0]['type']
          // var img = that.data.temp[0][tableIdx][seatIdx][timeIdx];
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
          // temp[floorIdx][roomIdx][tableIdx][seatIdx][timeIdx] = 'N'
          roomData[roomDataIdx]['times'][0][timePeiodIdx][0]['type'] = 'N'
          // }
          // }
        }
        if (test == 0) {
          wx.showModal({
            title: '提示',
            content: '确定在' + that.data.timeId[timeIdx] + '预约' + floor[floorIdx] + 'F-' + floor[floorIdx] + (roomIdx + 1) + '教室?',
            success: function (res) {
              if (res.confirm) {
                that.setData({ roomData: roomData })
                wx.showModal({
                  content: '成功预定,' + '祝学习愉快~o(*￣▽￣*)o',
                  showCancel: false,
                })
                var bookPlace = that.data.place;
                wx.request({
                  url: 'http://localhost:8888/api/classroom?houRoom=' + houRoom + '&timePeiodIdx=' + timePeiodIdx,
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  method: "POST",
                  data: {
                    "username": username,
                    "bookDate": that.data.date,
                    "bookTime": that.data.timeId[timePeiodIdx - 8],
                    "bookPlace": bookPlace,
                  },
                  success: function (res) {
                    // var libraryTest = res.data;
                    that.setData({
                      // libraryTest: libraryTest.data
                    })
                    // console.log(that.data.libraryTest)
                  },
                  fail: function (res) {
                    console.log('fail')
                  }
                })
              }
            }
          })
        }
      }
    }
    else {
      wx.redirectTo({
        url: '../../../info/login/login',
      })
    }
  },
  onLoad: function (options) {
    var that = this;
    console.log(options)
    var buildingIdx = options.buildingIdx;
    var floorIdx = options.floorIdx;
    var roomIdx = options.roomIdx;
    var houBuilding = ['library', 'yifu', 'xingxiang', 'wenke', 'erjiao', 'yijiao']
    var houRoom = houBuilding[buildingIdx] + floorIdx + roomIdx;
    var teachingBuilding = ['图书馆', '逸夫楼', '兴湘', '文科楼', '二教', '一教'];
    var floor = ['6', '5', '4', '3', '2', '1'];
    var place = teachingBuilding[buildingIdx] + "-" + floor[floorIdx] + 'F-' + floor[floorIdx] + (roomIdx + 1) + '教室';
    wx.setNavigationBarTitle({
      title: place,
    })
    console.log(houRoom);
    wx.request({
      // url: 'http://localhost:8888/api/classroom?building=library&floor=0&room=0',
      url: 'http://localhost:8888/api/classroom?room=' + houRoom,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      success: function (res) {
        console.log(res)
        console.log(res.data)
        var roomData = res.data.data;
        that.setData({
          roomData: roomData,
          houRoom: houRoom,
          floorIdx: floorIdx,
          roomIdx: roomIdx,
          buildingIdx: buildingIdx,
          place: place,
        })
        // console.log(that.data.roomData)
        // console.log(that.data.roomData[0]["times"][0]["8"][0]["type"])
        // console.log(that.data.roomData[0]["times"][0]["8"][0]["type"])
      },
      fail: function (res) {
        console.log('fail')
      }
    })

  }
  // onLoad: function (options) {
  //   var list = wx.getStorageSync('list')
  //   console.log(list)
  //   var buildingIdx = parseInt(options.buildingIdx) ;
  //   var floorIdx = options.floorIdx;//floor
  //   var roomIdx = parseInt(options.roomIdx);//floor
  //   var temp = list[buildingIdx]//temp可以是library/yiFu/sanJiao等
  //   var teachingBuilding = ['图书馆', '逸夫楼', '兴湘', '文科楼', '二教', '一教'];
  //   var floor = ['6', '5', '4', '3', '2', '1'];

  //   wx.setNavigationBarTitle({
  //     title: teachingBuilding[buildingIdx] + "-" + floor[floorIdx] + 'F-' + floor[floorIdx] + '0' + (roomIdx + 1) + '教室',
  //   })
  //   var timeHour = formatTime(new Date()).split(' ')[2];
  //   var timeMinute = formatTime(new Date()).split(' ')[4];
  //   // 过了晚上十点，预定日期自动跳到第二天
  //   if (timeHour >= 9) {
  //     var date = formatTime(new Date()).split(' ')[3];
  //   }
  //   if (timeMinute >= 30) {
  //     var timePeiodIdx = timeHour - 8;
  //     var dateArr=temp[floorIdx]
  //     console.log(dateArr)
  //     console.log(roomIdx)
  //     for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
  //       for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
  //         if(dateArr[roomIdx][tableIdx][seatIdx][timePeiodIdx] ==='Y'){
  //         dateArr[roomIdx][tableIdx][seatIdx][timePeiodIdx] = 'S';//stop
  //         }
  //       }
  //     }
  //   }
  //   util.loop(temp, roomIdx, floorIdx, timeHour, "date");
  //   this.setData({
  //     temp: temp,
  //     floorIdx: floorIdx,
  //     roomIdx: roomIdx,
  //   })
  // },
})