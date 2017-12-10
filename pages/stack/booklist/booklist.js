// pages/types/types.js
Page({
  data: {
    bookList:[],
    stack:[]
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../../logs/logs'
    })
  },
  onLoad: function (params) {
   var that = this;
  //  console.log(params.id);
    wx.request({
      url:'https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo',
      success: function(res) {
        var bTypes = res.data.data.stack[params.id].bookTypes;
        wx.setNavigationBarTitle({ 
          title: bTypes,
        },1);
        that.setData({
          bookList: res.data.data.stack[params.id].List.bookList,
        })  
      }
    })
    // console.log(res.data.data.stack[params.id].bookTypes); 
  },
})