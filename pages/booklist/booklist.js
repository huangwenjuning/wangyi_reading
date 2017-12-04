// pages/types/types.js
Page({
  data: {
    bookList:[],
  },

  onLoad: function () {
   var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo',
      success: function(res) {
        console.log(res.data.data);
        that.setData({
          bookList: res.data.data,
        })
      }
    })
  },

})