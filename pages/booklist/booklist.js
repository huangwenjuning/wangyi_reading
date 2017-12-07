// pages/types/types.js
Page({
  data: {
    bookList:[],
    type:[],
    item: []
  },

  onLoad: function (params) {
   var that = this;
   console.log(params.id);
    wx.request({
      url:'https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo',
      success: function(res) {
        console.log(res.data.data);
        // console.log(item);
        var datas = res.data.data.type[0].List.bookList;
        // .filter((item)=>{
        //   return item.List.id == params.id;
        // })
        console.log(datas);
        that.setData({
          bookList: res.data.data.type[params.id].List.bookList,
        })
      }
    })
  },

})