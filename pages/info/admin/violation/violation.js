// pages/index/violation.js
var app = getApp();
var dataUtil = require('../../../../data/publicData.js');
var util = require('../../../../utils/util.js');
import { formatTime } from '../../../../utils/util'
Page({
    data: {
        remind: false,
        array: ['图书馆', '逸夫楼', '兴湘', '三教', '二教', '一教'], arrayLou: ['六楼', '五楼', '四楼', '三楼', '二楼', '一楼'],
        arrayRoom: ['01', '02', '03', '04', '05', '06'],
        index: 0,
        indexLou: 0,
        indexRoom: 0,
        time: parseInt(formatTime(new Date()).split(' ')[1].substring(0, 2)) - 8

    },
    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value
        })
    },
    bindPickerChangeLou: function (e) {
        this.setData({
            indexLou: e.detail.value
        })
    },
    bindPickerChangeRoom: function (e) {
        if (this.data.list[this.data.index][this.data.indexLou][e.detail.value] === undefined) {
            this.setData({
                remind: true,
            })
        }
        else {
            this.setData({
                remind: false,
                indexRoom: e.detail.value
            })
        }
    },
    N: function (e) {
        var that = this;
        var list = that.data.list;
        var tableIdx = e.currentTarget.dataset.tableidx;
        var seatNum = e.currentTarget.dataset.seatnum;
        var index = that.data.index;
        var indexLou = that.data.indexLou;
        var indexRoom = that.data.indexRoom;
        wx.showModal({
            title: '提示',
            content: "确定" + this.data.array[this.data.index] + this.data.arrayLou[this.data.indexLou] + this.data.arrayRoom[this.data.indexRoom] + '教室' + (tableIdx + 1) + '-' + (seatNum + 1) + "座位未被使用?",


            //当前点击项的id
            success: function (res) {
                if (res.confirm) {
                    list[index][indexLou][indexRoom][tableIdx][seatNum][that.data.time] = 'Y';
                    that.setData({ list: list })
                    wx.setStorage({
                        key: 'list',
                        data: list,
                    })
                }
            }
        })
    },
    Y: function () {
        wx.showModal({
            content: '无人选择该座位',
            showCancel: false,
        })
    },
    onLoad: function (options) {
        // var list = dataUtil.publicData;
        var list = wx.getStorageSync('list')
        this.setData({
            list: list
        });
    }
})