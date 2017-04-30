// pages/information/information.js
var app = getApp();
Page({
  data: {
    username: null,
    infoType:'',
    successTimes: 0,
    failTimes: 0,
    recentBook: "",
    pages: ['违规登记', '图书馆、教学楼使用状态更改', '管理员账号管理'],
    pagesUrl:['violation','status','IDManagement'],
  },
  exit:function(){
    wx.removeStorageSync('user');
    wx.redirectTo({
        url: 'login/login',
      })    
  },
  temporary:function(){
    wx.showModal({
            content: '快点回来哟，会为你保留30分钟~o(*￣▽￣*)o',
            showCancel: false,
          })
  },
  leave:function(){
    wx.showModal({
            content: '期待下次再见~o(*￣▽￣*)o',
            showCancel: false,
          })
  },
  onLoad: function (options) {
    // var recentBook='';
    console.log(options)
    
    var username=options.username;
    try {
      var user = wx.getStorageSync('user')
      if (user&&user.username==username) {
        // Do something with return value
      }
      else {
        var list = '';
      }
    } catch (e) {
    }
  
    if(user){
      this.setData({
        username:user.username,
        infoType:user.infoType,
        recentBook:user.recentBook,
      })
        
    }
    else{
      wx.redirectTo({
        url: 'login/login',
      })
    }
    
  },
  status: function () {
    wx.navigateTo({
      url: '../status/status',
    })
  },
  violation: function () {
    wx.navigateTo({
      url: '../violation/violation',
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
})