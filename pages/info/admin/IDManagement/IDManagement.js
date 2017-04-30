var app=getApp();
Page({
  data:{
    frame:true,
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
    this.setData({ passwordCreate: event.detail.value })
  },
  passwordInputAgainCreate: function (event) {
    this.setData({ passwordAgainCreate: event.detail.value })
  },
  btn:function(){
    var user=wx.getStorageSync('user')
    if(user.password==this.data.password){
      this.setData({
        frame:false
        })
    }
    
  },
  confirm:function(){
    var userTotal=wx.getStorageSync('userTotal')
    var user={
      username:this.data.usernameCreate,
      password:this.data.passwordCreate,
      email:this.data.emailCreate,
      infoType:'admin',
    }
    userTotal.push(user)
    wx.setStorage({
      key: 'userTotal',
      data: userTotal,
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})