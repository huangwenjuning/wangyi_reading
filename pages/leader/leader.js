//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    authors: [],
  },
  onShow: function() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 500);
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo',
      success: function (res) {
        console.log(res.data.data.index);
        that.setData({
          authors: res.data.data.index,
        })
      }
    })
  },
 /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
      },
       /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },

})
