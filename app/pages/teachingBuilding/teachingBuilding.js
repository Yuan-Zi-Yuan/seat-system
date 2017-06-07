var app = getApp();
var dataUtil = require('../../data/publicData.js');
var util = require('../../utils/util.js');
Page({
  data: {
    emoji: ['0', '0', '0', '0', '0','0'],
    listForm: [
      {
        id: 'library',
        name: '图书馆',
        open: false,
        pages: ['6F', '5F', '4F', '3F', '2F', '1F']
      },
      {
        id: 'yiFu',
        name: '逸夫楼',
        open: false,
        pages: ['6F', '5F', '4F', '3F', '2F', '1F']
      },
      {
        id: 'xingXiang',
        name: '兴湘',
        open: false,
        pages: ['6F', '5F', '4F', '3F', '2F', '1F']
      },
      {
        id: 'wenKeLou',
        name: '文科楼',
        open: false,
        pages: ['6F', '5F', '4F', '3F', '2F', '1F']
      },
      {
        id: 'erJiao',
        name: '二教',
        open: false,
        pages: ['6F', '5F', '4F', '3F', '2F', '1F']
      },
      {
        id: 'yiJiao',
        name: '一教',
        open: false,
        pages: ['6F', '5F', '4F', '3F', '2F', '1F']
      },
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, listForm = this.data.listForm;
    for (var i = 0, len = listForm.length; i < len; ++i) {
      if (listForm[i].id == id) {
        listForm[i].open = !listForm[i].open
      } else {
        listForm[i].open = false
      }
    }
    this.setData({
      listForm: listForm
    });
  },
  loop: function () {
    var emoji = [];
    for (var i = 0; i < 5; i++) {
      var temp = util.emoji(this.data.list[i], 0, 0, 13)
      emoji.push(temp)
    }
    this.setData({
      emoji: emoji
    })
  },
  onLoad: function (options) {
    var that = this;
    var list = wx.getStorageSync('list')
  },

})
