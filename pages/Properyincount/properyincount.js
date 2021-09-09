// pages/Properyincount/properyincount.js
var util = require('utils')
  var nowdate = util.formatDate(new Date())

Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    intime:nowdate,




    background: 'linear-gradient(360deg, #ffffff, grey)',
    titleInfo:"资产入库登记"

  },

  /**
   * 获取输入内容的方法
   */
  property_id:function(e)
  {
    
  },
  property_code:function(e)
  {
    this.setData({
      code: e.detail.value
    })
  },
  property_dalei:function(e)
  {
    this.setData({
      dalei: e.detail.value
    })
  },
  property_xiaolei:function(e)
  {
    this.setData({
      xiaolei: e.detail.value
    })
  },
  property_name:function(e)
  {
    this.setData({
      name: e.detail.value
    })
  },
  property_intime:function(e)
  {
   this.setData({
     intime: e.detail.value
   })

  },
 


  property_using :function(e)
  {
    this.setData({
      using: e.detail.value
    })
  },
  property_price:function(e)
  {
    this.setData({
      price: e.detail.value
    })
  },

  submitporpertyincount(event){
    wx.request({
      url: 'http://127.0.0.1:5000/rukudengji',
      data:{
        incountid:this.data.incountid,
        code:this.data.code,
        dalei:this.data.dalei,
        xiaolei:this.data.xiaolei,
        name:this.data.name,
        intime:this.data.intime,
        position:this.data.position,
        using:this.data.using,
        price:this.data.price,
    },
      method: "POST", //Post请求的默认设置
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //Post请求的默认设置
      },
      success:(res)=>{
        var that = this;
        console.log(res.data)
        
      }
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n);
//年
    var Y = date.getFullYear();
//月
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//时
    var h = date.getHours();
//分
    var m = date.getMinutes();
//秒
    var s = date.getSeconds();
    console.log(Y+"-"+M+"-"+D+" "+h+"-"+m+"-"+s)
    this.setData({
      //入库操作时间
      //获取当前时间
      incountid:Y+"-"+M+"-"+D+" "+h+"-"+m+"-"+s
    })
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

  },



    /**
   * 获取输入框所有内容
   */
  getallvalue:function(){
    if (condition) {
      
    } else {
      
    }  



  },


  

   
    /**
   * 选择图片的方法
   */
  

   
    /**
   * 提交到服务器
   */




})