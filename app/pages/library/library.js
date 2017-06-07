var app = getApp();

var dataUtil = require('../../data/publicData.js')
var util = require('../../utils/util.js');
import { formatTime } from '../../utils/util'

Page({
  data: {
    emoji: [0, 0, 0, 0, 0, 0],
    pages: ['6F', '5F', '4F', '3F', '2F', '1F'],
    newsTop: [
      {
        id: "news0",
        src: "http://www.xtu.edu.cn//d/file/xdxw/xnxw/2017-05-08/041b53f50b6964c171effee180394e58.jpg"
      },
      {
        id: "news1",
        src: "http://www.xtu.edu.cn/d/file/xdxw/xnxw/2017-05-04/0e97f4a7b60a332bd38f3d06b6c76c8d.jpg"
      },
      {
        id: "news2",
        src: "http://www.xtu.edu.cn/d/file/xdxw/xnxw/2017-05-04/d60bca3a634e7f586f03a5f2d34ea0a3.jpg"
      }
    ],
    newsList: ["05-15 我校新增数学学科进入ESI全", "05-12 中国大学生程序设计竞赛全国", "05-15 国防教育月系列活动圆满结束", "05-12 我校代表团访问莱昂大学", "05-12 我校举办第四届大学生创新论坛"]
  },

  loop: function () {
    var emoji = [];
    for (var m = 0; m < 6; m++) {
      console.log(this.data.library)
      console.log(this.data.library[m])
      var temp = this.emoji(this.data.library[m], 0, 13)
      emoji.push(temp)
    }
    this.setData({
      emoji: emoji
    })
    console.log(wx.getStorageSync('list'))

  },

  loopfuc: function (date, roomIdx, timeHour) {
    var i = 0, j = 0;
    for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
      for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
        for (var timePeiodIdx = 0; timePeiodIdx < timeHour; timePeiodIdx++) {
          if (date[roomIdx][tableIdx][seatIdx][timePeiodIdx] == "Y" || "N" || "S") {
            j++;//所有座位数量
            if (date[roomIdx][tableIdx][seatIdx][timePeiodIdx] == "Y") {
              i++;//可以选择的座位数量
            }
          }
        }
      }
    }
    return i / j;
  },
  emoji: function (date, roomIdx, timeHour) {
    var count = this.loopfuc(date, roomIdx, timeHour);
    switch (true) {
      case count < 0.25:
        return 3;
        break;
      case count < 0.5:

        return 2;
        break;
      case count < 0.75:

        return 1;
        break;
      case count <= 1:
        return 0;
        break;
    }
  },
  onLoad: function (options) {
    // var library = dataUtil.publicData[0];

    try {
      var list = wx.getStorageSync('list')
      if (list) {
        // Do something with return value
      }
      else {
        var list = dataUtil.publicData;
        wx.setStorageSync('list', list)
        // wx.setStorage({
        //   key: 'list',
        //   data: list,
        // })
        console.log(list)
      }
    } catch (e) {
      // Do something when catch error
    }
    var timeHour = formatTime(new Date()).split(' ')[2];
    var timeHourMin = formatTime(new Date()).split(' ')[1];
    var timeMinute = formatTime(new Date()).split(' ')[4];
    var changed = false;
    console.log(timeHourMin)
    // 过了晚上十点，预定日期自动跳到第二天
    if (timeHour == '22:00:00') {
      console.log('timeHour' + timeHour)
      var date = formatTime(new Date()).split(' ')[3];
      console.log('jinlaile')
      // var roomIdxLibrary = 5
      for (var BuildingIdx = 0; BuildingIdx < 5; BuildingIdx++) {
        // if (BuildingIdx === 0) {
        // roomIdxLibrary = 1;
        for (var floorIdx = 0; floorIdx < 5; floorIdx++) {
          // for (var roomIdx = 0; roomIdx < roomIdxLibrary; roomIdx++) {
          for (var tableIdx = 0; tableIdx < 5; tableIdx++) {
            for (var seatIdx = 0; seatIdx < 6; seatIdx++) {
              for (var timePeiodIdx = 0; timePeiodIdx < (timeHour - 8); timePeiodIdx++) {

                list[BuildingIdx][floorIdx][0][tableIdx][seatIdx][timePeiodIdx] = 'Y';//stop

              }
            }
          }
          // }
        }
        // }
      }
      console.log(list);
      wx.setStorage({
        key: 'list',
        data: list,
      })
    }
    console.log(list)
    var library = list[0]
    console.log(library)
    this.setData({
      library: library,
    })
    this.loop();
    wx.getStorage({
      key: 'list',
      success: function (res) {
        // success
        console.log(list)
      },
      fail: function (res) {
        // fail
        console.log('fail')
      },
      complete: function (res) {
        // complete
      }
    })

  },

})