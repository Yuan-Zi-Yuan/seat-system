// pages/information/information.js
var app = getApp();
Page({
  data: {
    username: '',
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
    var user="";
    var username=options.username;
    if (app.appData.userInfo!=null) {
      var userInfo=app.appData.userInfo;
      console.log(userInfo);
      this.setData({
        username: userInfo.username,
        infoType: userInfo.infoType,
        successTimes: userInfo.successTimes,
        failTimes:userInfo.failTimes,
        recentBook:userInfo.recentBook
      })
      if(userInfo.recentBook){
        this.setData({
          recentBook: userInfo.recentBook[0],
        })
      }
      if (userInfo.successTimes) {
        this.setData({
          successTimes: userInfo.successTimes,
        })
      }
      if (userInfo.failTimes) {
        this.setData({
          failTimes: userInfo.failTimes,
        })
      }
      
    }
    else{
      console.log(app.appData.userInfo)
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