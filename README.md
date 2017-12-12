与你一起写小程序
=====

最近一段时间在学习怎么写小程序，然后自己利用课外时间，也撸了一个。一直都很喜欢网易蜗牛读书这款App，对于喜爱的事物总是情不自禁的，于是就仿照网易蜗牛读书的App简单做了这款小程序。

项目地址：[杳杳飞花/Reading](https://github.com/Hwj1220/wangyi_reading)
------
项目预览：
------
![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/reading.gif) 


项目准备：	
------

大家若是感兴趣，可以跟着我一起来做哟^_^

☟ 蓝体点击就能跳转到相应页面进行下载或者查看教程

1、[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=201715)   他能帮助我们快速的进行小程序的开发。当然，在开发之前我们还需要拥有一个小程序账号（[注册教程](https://jingyan.baidu.com/article/d7130635decb6a13fdf475d3.html)），通过账号我们就能够管理自己的小程序了。需要注意的是，只有满了18岁的童鞋们才可以注册。

2、[vs code](https://pan.baidu.com/s/1c1HxXOs) （密码：g2g5） 64位系统的，其他版本就自己去搜一下安装包啦。虽然在微信开发者工具里面就能够直接写，但还是喜欢在vs code里面进行coding。这个按大家喜好自由选择哦。

3、[Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/) 一个阿里爸爸做的开源图库，它不仅有几百个公司的开源图标库，还有各式各样的小图标。有了这个图标库真是大大提高了我们的效率，我们能够根据需要进行图标搜索，还能够设置颜色、大小和图片格式。你想要的基本都有哦~

4、[EasyMock 简单高效的伪造数据](https://www.easy-mock.com/)   用于后台的数据模拟，得到JSON数据，方便开发。

5、[微信小程序开发文档](https://www.w3cschool.cn/weixinapp/9wou1q8j.html)  W3C的这个文档真是超级详细，我们能够在这里查找到微信小程序的API、组件以及一些框架等。

另外还使用了一款MarkMan进行测量，但若是追求精准还原的话，还是用PS更细腻。

项目开发过程：
------
每一次的开发都是一个成长的过程。在开发过程中，我们会遇到各种问题，这就给了我们一个独立思考的空间，能够锻炼我们解决问题和查询文档的能力。当然，在思考查询之后还可以请教他人、进行探讨，这样往往能够帮助我们快速的找到盲点，甚至能够了解到更多我们忽视的点。和别人的交流也是学习中很重要的一环，所以在此分享了自己小小的一点经验，欢迎一起交流，一起学习。

### 1、开始项目
在项目开始时，我们首先在 app.json 文件中配置主体界面，设置好tabBar 。在这里我们对小程序设置确定了一个整体的基调。
		
	"window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "网易蜗牛读书",
    "navigationBarTextStyle":"black"
	  },
	  "tabBar":{
    "color":"#999999",
    "selectedColor":"#444444",
    "backgroungColor":"#ffffff",
    "borderStyle":"#e0e0e0",
    "list": [
      {
        "pagePath":"pages/leader/leader",
        "iconPath": "assets/icons/lingdu.png",
        "selectedIconPath": "assets/icons/lingdu_sel.png",
        "text":"领读"
      },
      {
        "pagePath":"pages/stack/stack",
        "iconPath": "assets/icons/stack.png",
        "selectedIconPath": "assets/icons/stack_sel.png",
        "text":"分类"
      },
      {
        "pagePath": "pages/bookdesk/bookdesk",
        "iconPath": "assets/icons/bookdesk.png",
        "selectedIconPath": "assets/icons/bookdesk_sel.png",
        "text":"书桌"
      },
      {
        "pagePath":"pages/mine/mine",
        "iconPath": "assets/icons/mine.png",
        "selectedIconPath": "assets/icons/mine_sel.png",
        "text":"我的"
      }
    ]
     }

对于 pages 页面，在开发过程中进行过很多次调整。到现在为止觉得还算整洁和便于管理了。在起初，不管是一级页面还是二级页面，我都把它们放在了 pages 目录下。这样一开始还不觉得有什么，可是到后来页面越来越多，要对之前写过的页面进行修改和调整的时候，恍然间发现一堆文件夹，查找起来就觉得眼花缭乱，还要和页面进行配对，非常恼火。于是按照页面不同的级别层次，进行了相应的调整。按照不同的tabBar确定了主体的文件夹，然后各级页面又分别在各自所属层级的目录下。另外对于页面的命名尽量通俗易懂，这样方便自己对各页面进行查看和管理。

	"pages":[
    "pages/index/index", 
    "pages/leader/leader",  // 领读人  
    "pages/leader/stories/stories", 
    "pages/leader/authors/authors", 
    "pages/stack/stack",  // 分类
    "pages/stack/booklist/booklist", 
    "pages/stack/booklist/bookdetail/bookdetail",
    "pages/bookdesk/bookdesk",   // 书桌
    "pages/mine/mine",   // 我的
    "pages/mine/news/news",    
    "pages/logs/logs" 
	  ],
 

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/v2-985964c783e7bde42bdae79fb574b532_hd.jpg) 

在分类页面下具有多层级的一个页面创建展示：

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/v2-19326db440843aa25b219e3fcbc8c63c_hd.jpg) 

所以在项目开始时首先思考的就是文件的排版问题，一个合理的结构，能够增强项目的可读性，以后操作和维护也更加方便，能够节约一定的时间。

小技巧： 在创建pages页面时，如果我们在微信开发者程序的app.json文件中创建，就会自动的生成相应的文件夹，就不用我们一个一个去创建了。
### 2、页面布局和样式
小程序属于轻量级的应用，所以在忠于原App的基础上，对某些页面进行了一些调整。另外，在这里所有的页面都是我切的，可能会有人说很多页面都可以引用第三方框架，没有必要写原生代码。其实都没有错，要看自己写小程序是为了什么。我做这款小程序是为了学习小程序的开发，另外自己的前端之旅还是刚刚开启，所以为了在 coding 中锻炼自己对各种结构的敏感性，加深自己对样式属性的理解，我选择了自己写原生代码。

其实第三方框架是非常好的轮子，像微信团队开发的 weui 框架就很好用，它提供了很多的组件，能够让你摆脱切页面的繁琐，减少开发时间。对于 weui 的使用我也不是很熟练，所以在后续的学习中，还会继续修改这个小程序，用不同的方法实现页面。
另外，在命名时，我使用了BEM规范，这样便于对页面结构的理解，使代码更易读。BEM命名法则给我们提供了一个很好的模板，在命名中就能体现各个元素之间的关系，CSS的命名更加语义化，元素更易读懂。而且独一无二的命名方式，使得代码能够得到更好的复用。

stack.wxml

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/v2-e9b0e7e2fc3e81b8c25c5b38cb9600d4_hd.jpg) 

### 3、使用 easy-mock 造数据
写完基本样式之后，要思考的就是数据问题。我们开发的页面很少有静态的。我们把数据写在页面中没有任何意义还平白增加了工作量。此时我们就需要模拟后台数据，让这些数据能够通过请求渲染到页面上。easy-mock 就给我们提供了一个很好的平台来造假数据，然后生成URL 通过 wx.request() 方法来获取数据，实现页面加载数据。

另外还可以在本地写假数据。今天在阅读别人文章时有看到用require()方式来请求数据的。对于这个不是很懂，通过查询之后才发现这是CommonJS 中的模块实现。实现一项功能的方法有很多种，我觉得我们不能只满足于一种方法，而应该广泛的涉猎，通过对不同方法的学习，让自己的知识储备更庞大。

项目基本功能：
------
### 1、小程序启动页面的实现
在这里我使用了setInterval（）和clearInterval（）方法来实现，然后通过switchTab来实现跳转


	Page({
	  data: {
	    time:3
	  },
	  onLoad: function () {
	    var count = setInterval(()=>{   
	      this.setData({
	        time : this.data.time -1
	      });
	      if(this.data.time == 0) {  
	        wx.switchTab({
	          url:'../leader/leader',
	          complete:function(res) {
	          }
	        })
	        clearInterval(count);
	      }
	    },1000);
	  }
	})

### 2、跳转页面时获取id, 获取不同数据
一开始自己对数据获取还不是很熟练，只能进行简单的单页面渲染。后来通过查文档和摸索，逐渐的能够进行复杂一些的数据获取。另外，在setData时，如果不清楚结构，可以使用console.log(); 方法及时的查看数据结构，一层层的剥开找到我们需要的数据层。
为了更便于理解，附上两张动图展示，可以发现当我点击不同文章之后，跳转的页面获取的数据也不一样。

领读

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/data.gif) 

分类

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/data2.gif) 

在这里分类页面的数据更整齐一些，就以它为例来说一说我是如何通过id来动态选择数据的。首先要清楚的是stack分类页面和跳转到的booklist详情页。在这里是通过navigator来跳转的，我们在url中设置表达式来动态获取id，url="booklist/booklist?id={{index}}"，然后在 booklist.js 中，通过获取到的id，进行数据的选择。

stack:

stack.wxml

```    <view>
          <view>
              <view class="page-search"></view>
              <scroll-view wx:for="{{stack}}" wx:key="{{index}}" scroll-y="true">
                  <navigator class="stack-view " url="booklist/booklist?id={{index}}">
                      <image src="{{item.typeCover}}" class="stack-image"></image>
                      <text class="stack-name">{{item.bookTypes}}</text>
                      <text class="stack-numb">{{item.bookNumb}} ></text>
                  </navigator>
                  <view class="line"></view>
              </scroll-view>
          </view>
      </view>
```

stack.js


	      Page({
		  data: {
		    stack:[],
		    id: ""
		  }, 
		  onLoad: function () {
		      var that = this;
			wx.request({
			  url:"https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo",
			  success: function(res) {
			    console.log(res.data.data.stack);
			    console.log(res.data.data.List);              
			    that.setData({
			      stack: res.data.data.stack,
			      id: res.data.data.List
			    })
			  }
			})
		      },   
		})
	
	
booklist:

booklist.wxml
　
		 

	<view>
		  <view>
		      <view wx:for="{{bookList}}" wx:key="{{index}}">
			  <view class="book-list-root" bindtap="bindViewTap">  
			      <view class="book-list-child">
				  <view>
				      <text class="book-list-name">{{item.bookName}}</text>
				  </view>
				  <view>
				      <text class="book-list-autor">{{item.authorName}}</text>
				  </view>
				  <view class="book-list-des">
				      <text>{{item.bookDes}}</text>
				  </view>
			      </view>
			  </view>
			  <view class="line"></view>            
		      </view>
		  </view>
	      </view>

booklist.js

	        Page({
		  data: {
		      bookList:[],
		      stack:[]
		    },
		  onLoad: function (params) {
		    var that = this;
		      wx.request({
			url:"https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo",
			success: function(res) {
			  that.setData({
			    bookList: res.data.data.stack[params.id].List.bookList,
			  })  
			}
		      })
		      },
		  })
	  
### 3、对navigationBarTitleText的动态修改

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/data3.gif) 

在各个页面的JSON文件中，我们能够设置页面的标题，但是当我们进入不同页面需要获取不同标题时，就需要动态的进行修改。其实实现起来很简单，我们知道通过wx.setNavigationBarTitle() 方法就能够修改页面标题，然后跟第二点所述的方式一样，通过id来达到动态获取的效果。

另外要注意的是，我们要将JSON中的navigationBarTitleText设置为空，这样在跳转的过程中就不会有原始标题和修改标题之间跳转的一个效果，而是直接显示需要的标题。
	
	     .json
		  {
		      "navigationBarBackgroundColor": "#fff",
		      "navigationBarTitleText": " ",
		      "navigationBarTextStyle": "black"
		  }
	       .js
		onLoad: function (params) {
		  var that = this;
		    wx.request({
		      url:"https://www.easy-mock.com/mock/5a23a9a2ff38a436c591b6fa/getArticInfo",
		      success: function(res) {
			var bTypes = res.data.data.stack[params.id].bookTypes;
			wx.setNavigationBarTitle({ 
			  title: bTypes,
			},1);
		      }
		    })
		  },
	  
### 4、两种页面跳转方式
#### （1）使用 navigator 方式
navigator的跳转能够保留当前页面，可返回
      
	    <navigator class="stack-view " url="booklist/booklist?id={{index}}">
	      //  点击部位，触发即可跳转
	      </navigator>

	      <view class="page__bd-items page-flex" bindtap="tomyNews">
			  <view class="page-items-lt">
			      <image src="../../assets/images/mines/news.png" />
			  </view>
			  <view class="page-items-md">我的消息</view>
			  <view class="page-items-others"></view>
			  <view class="page-items-ft">></view>
	      </view>

	      tomyNews:function(e) {
		  wx.navigateTo({
		    url:'news/news'
		  })
		},

需要注意的是：程序中要求页面的层级最多只能有五层，因为这种方式保留当前页面，也就是说以这种方式跳转页面，最多只能打开5个页面。
#### （2）使用 switchTab 方法

该方法能够跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

        wx.switchTab({
                  url:'../leader/leader',
                  complete:function(res) {
                  }
                })
		
### 5、swiper实现轮播
通过 swiper 和 swiper-item 实现了书桌页面的轮播效果。

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/data4.gif) 

这里的相关属性就直接使用了网上的图片：

![img](https://raw.githubusercontent.com/Hwj1220/wangyi_reading/master/assets/readmeImage/v2-37f8891696e8daf279bbfb8c1d73a421_hd.jpg) 

	<swiper class="swiper" indicator-dots="true" 
	interval="5000" duration="1000">
	        <swiper-item>
	            <view class="page__bd">
	                <view class="page__bd-books center">
	                   <image
	                    src="../../assets/images/book1.png" />
	                </view>
	                <view class="page__bt">
	                    <view class="page__bt-readings">
	                    南风知我意</view>
	                    <view class="page__bt-items center">
	                        <view>1186人在读</view>
	                        <image 
	                        src="../../assets/images/rg.png" />
	                    </view>
	                </view>
	            </view>
	        </swiper-item>
	 </swiper>

其中，swiper-item 可以通过 wx:for 来循环。

总结：
------
这一次的小程序开发，让我学到了很多东西。我们是为了学习而开发项目。因此在coding的时候要沉住气，不要急躁，遇到问题就及时的去查文档或者请教别人，然后多想一想实现的方法，是不是还能够通过其他办法来实现。这样在不断的思考和解决问题中，在不断的踩坑中才能让自己快速的成长起来。

另外，其实还有很多功能和细节没有处理好，这一次的分享并不代表着结束，通过不断的学习，还将不断的对项目功能进行完善和处理各种细节。


            
            ☝想要一个star哦☺

### 欢迎一起交流学习哟 ☞ 782835831@qq.com 

