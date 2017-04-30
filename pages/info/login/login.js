// pages/login/login.js
var dataUtil = require('../../../data/publicData.js');
var app = getApp();
Page({
  data: {
    username: null,
    password: null,
  },

  login: function () {
    try {
      var user = wx.getStorageSync('userTotal')
      if (user) {
        // Do something with return value
      }
      else {
        var user = dataUtil.user;
        wx.setStorage({
          key: 'userTotal',
          data: user,
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    var bingo = true;
    for (var i = 0; i < user.length; i++) {
      if (this.data.username == user[i].username && this.data.password == user[i].password) {
        console.log(user[i])
        bingo = false;
        var username = user[i].username;
        var infoType = user[i].infoType
        wx.setStorage({
          key: 'user',
          data: user[i],
        })
        wx.switchTab({ url: "../info?username=user[i].username" })
        return
      }
    }
    if (bingo) {
      wx.showModal({
        content: '用户名或密码错误',
        showCancel: false,
        success: function (rer) {
          console.log("用户点击确定")
        }
      })
    }
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