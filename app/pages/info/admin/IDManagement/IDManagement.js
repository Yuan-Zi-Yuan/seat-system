var app = getApp();
Page({
  data: {
    frame: true,
  },
  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },
  usernameInputCreate: function (event) {
    this.setData({ usernameCreate: event.detail.value })
  },
  emailInputCreate: function (event) {
    this.setData({ emailCreate: event.detail.value })
  },
  passwordInputCreate: function (event) {
    // this.setData({ passwordCreate: event.detail.value })
  },
  passwordBlur: function (event) {
    // var passwordCreate = this.data.passwordCreate;
    var that = this;
    console.log(event);
    if (event.detail.value.length != 6) {
      wx.showModal({
        title: '提示',
        content: '请输入六位密码！',
      })
    } else {
      that.setData({ passwordCreate: event.detail.value })

    }
  },
  passwordAgainBlur: function (event) {
    var that = this;
    var passwordCreate = that.data.passwordCreate;
    if (event.detail.value == passwordCreate) {
      that.setData({ passwordAgainCreate: event.detail.value })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '两次密码输入不一致，请重新输入。',
      })
    }
  },
  btn: function () {
    // var user=wx.getStorageSync('user')
    var user = app.appData.userInfo;
    console.log(user)
    if (user.password == this.data.password) {
      this.setData({
        frame: false
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '密码错误',
      })
    }

  },
  confirm: function () {
    var that = this;
    var username = that.data.usernameCreate;
    wx.request({
      url: 'http://localhost:8888/api/username?username=' + username,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "GET",
      data: {
        "username": username,
      },
      success: function (res) {
        console.log(res);
        var bingo = res.data.message;
        if (bingo == "true") {
          var emailFormat = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          console.log(that.data.emailCreate)
          if (!emailFormat.test(that.data.emailCreate)) {
            wx.showModal({
              title: '提示',
              content: '请检查邮箱格式，重新提交。',
            })
            return false;
          }
          wx.showModal({
            title: '提示',
            content: '管理员账户新建成功',
          })
          var user = {
            username: that.data.usernameCreate,
            password: that.data.passwordCreate,
            // email:that.data.emailCreate,
            infoType: 'admin',
          }
          wx.request({
            url: 'http://localhost:8888/api/create',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            data: {
              "username": that.data.usernameCreate,
              "password": that.data.passwordCreate,
              "infoType": 'admin'
            },
            success: function (res) {
              console.log('ok')

            },
            fail: function (res) {
              console.log('fail')
            },
          })


        } else {
          wx.showModal({
            title: '提示',
            content: '你提交的账号不能使用，请重新提交',
          })
        }
      },
      fail: function (res) {
        console.log('fail')
      },
    })

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