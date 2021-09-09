// pages/MainPage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    scanCoderesult:"",
    resultvalue2:'',
    msgg:'',
    text: "8月13日机房值班人员：丁宇阳    应急值班人员：赵洋",
    marqueePace:0.5,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marquee_margin: 30,
    size:16,
    interval: 20 // 时间间隔

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this),
     
     })
},

toppropertyincount:function(){

  wx.navigateTo({
    url: '/pages/Properyincount/properyincount',
  })

},

toppropertypage:function(){

  wx.navigateTo({
    url: '/pages/Propertypage/propertypage',
  })

},

topworkplanpage:function(){

  wx.navigateTo({
    url: '/pages/WorkPlan/workplan',
  })

},


inputprocess:function(e){
  console.log('resultvalue2', e.detail)
  this.setData({
    resultvalue2: e.detail.value,
   })

},


search: function (value) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve({text: '搜索结果', value: 1})
        resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
       //resolve([{text: '搜索结果', value: 1}, {text: resultvalue2, value: 2}])
      }, 200)
  })
},

selectResult: function (e) {
  console.log('select result', e.detail)
},


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    //console.log(length,windowWidth);
    that.setData({
     length: length,
     windowWidth: windowWidth
    });
   
    that.scrolltxt();// 第一个字消失后立即从右边出现
    },
     
    scrolltxt: function () {
    var that = this;
    var length = that.data.length;//滚动文字的宽度
    var windowWidth = that.data.windowWidth;//屏幕宽度
    console.log(length,windowWidth);
    if (length > windowWidth){
     
     var interval = setInterval(function () {
     var maxscrollwidth = length + that.data.marquee_margin;//滚动的最大宽度，文字宽度+间距，如果需要一行文字滚完后再显示第二行可以修改marquee_margin值等于windowWidth即可
     var crentleft = that.data.marqueeDistance;
     if (crentleft < maxscrollwidth) {//判断是否滚动到最大宽度
      that.setData({
      marqueeDistance: crentleft + that.data.marqueePace
      })
     }
     else {
      that.setData({
      marqueeDistance: 0 // 直接重新滚动
      });
      clearInterval(interval);
      that.scrolltxt();
     }
     }, that.data.interval);
    }
    else{
     that.setData({ marquee_margin:"1000"});//只显示一条不滚动右边间距加大，防止重复显示
    } 
    },

    /**
   * 扫码判断是否合规，是否被使用。
   */
  
  scancode() {
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果");
        console.log(res.result);
        //[z][f][b]+$
        if  (/^zfb.*/.test(res.result)) {
          //验证条码是否存在
          
          }
          else{
            wx.showToast({
              title: '不合规的条形码，请更换',
              duration: 2000,
              icon: false
              });

          }
        
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})