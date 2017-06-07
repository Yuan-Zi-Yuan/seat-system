var dataUtil = require('../../../data/publicData.js');
var app = getApp();
Page({
  data: {
    username: null,
    password: null,
  },

  login: function () {
    var that=this;
    var username = that.data.username;
    var password=that.data.password;
    wx.request({
      url: 'http://localhost:8888/api/login',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        "username": username,
        "password": password
      },
      success: function (res) {
        console.log(res);
        var bingo = res.data.message;
        var userInfo=res.data.data;
        if (bingo == 'true') {
          app.appData.userInfo={
            username:userInfo.username,
            password:password,
            infoType:userInfo.infoType,
            recentBook:userInfo.recentBook,
            successTimes: userInfo.successTimes,
            failTimes: userInfo.failTimes,
            recentBook:userInfo.recentBook,
          }
          wx.switchTab({ url: "../info?username=username" })
        } else {
          wx.showModal({
            content: '用户名或密码错误',
            showCancel: false,
            success: function (rer) {
              console.log("用户点击确定")
            }
          })
        }
      },
      fail: function (res) {
        console.log('fail')
      },
    })
  },

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})