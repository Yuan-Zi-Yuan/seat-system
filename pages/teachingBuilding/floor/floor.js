Page({
  data: {
    emoji: ['0', '0', '0', '0'],
    pages: []
  },
  ableRoom: function () {
    wx.navigateTo({
      url: '../classroom/classroom',
    })
  },
  disabledRoom: function () {
    wx.showModal({
      content: '形势与政策，邝倩讲师，8:00~9:40，逸夫楼605教室',
      showCancel: false,
    })
  },
  onLoad: function (options) {
    var floorIdx = options.floorIdx;
    var buildingIdx = options.buildingIdx;
    var teachingBuilding = ['逸夫楼', '兴湘', '文科楼', '二教', '一教'];
    var floor = ['6', '5', '4', '3', '2', '1'];
    var flIdx = floor[floorIdx];
    var pages= ['601', '602', '603', '604'];
    pages = [flIdx + '01', flIdx + '02', flIdx + '03', flIdx + '04']
    this.setData({
      floorIdx: floorIdx,
      buildingIdx: buildingIdx,
      pages: pages,
      flIdx:flIdx,
    })
    wx.setNavigationBarTitle({
      title: teachingBuilding[buildingIdx] + "-" + flIdx + 'F',
    })
  },
})