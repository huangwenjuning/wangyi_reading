//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    authors:[],
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo',
      success: function(res) {
        console.log(res.data.data.index);
        that.setData({
            authors: res.data.data.index,

        })
      }
    })
  }

})
