const hrefTo = require('../../utils/link.js');
const network = require('../../utils/network.js');
Page({
  data: {
    newGame:[
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/cd.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        title: '彩弹连连射',
        pf: 100,
        url: 'http://h5.91jianguo.com/uploads/xcx/cd_icon.png'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/gyd.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        title: '滚远点',
        pf: 93,
        url: 'http://h5.91jianguo.com/uploads/xcx/gyd_icon.png'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/fbzj.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        title: '防爆专家',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/fbzj_icon.png'
      }
    ],
    shaonao:[
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/gyd.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        la: '休闲娱乐',
        title: '滚远点',
        pf: 93,
        url: 'http://h5.91jianguo.com/uploads/xcx/gyd_icon.png'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/fbzj.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        la: '休闲娱乐',
        title: '防爆专家',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/fbzj_icon.png'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/qql.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        la: '益智交友',
        title: '砌砌乐',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/qql_icon.png'
      }
    ],
    yizhi: [
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/fbzj.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        la:'益智交友',
        title: '防爆专家',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/fbzj_icon.png'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/qql.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        la: '休闲娱乐',
        title: '砌砌乐',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/qql_icon.png'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/dt.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        content: '我们水电费水电费',
        label: '休闲娱乐，益智交友',
        la: '休闲娱乐',
        title: '点跳',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/dt_icon.png'
      }
    ],
  },
  hrefTo: hrefTo.hrefTo,
  preImg: hrefTo.preImg,
  onShareAppMessage: hrefTo.shareFn,
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    });
    var _that = this;
    network.GET('/Api_applet/list/', {
      success: function (res) {
        // console.log(res)
        // console.log(res.data.cvoData)
        let data = res.data.cvoData;
        //拿到解密后的数据，进行代码逻辑 
        _that.newGame(data);
        _that.yzData(data);
        _that.snData(data);
        wx.hideLoading();
      },
      fail: function () {
        //失败后的逻辑  

      },
    }) 

    //转发
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  newGame(data){
    this.setData({
      newGame:data.slice(0,3)
    })
  },
  yzData(data){
    this.setData({
      yizhi:data.slice(4,7)
    })
  },
  snData(data) {
    this.setData({
      shaonao: data.slice(8,11)
    })
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
})
