// pages/Propertypage/propertypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: 'linear-gradient(360deg, #ffffff, grey)',
    titleInfo: "新增、修改资产信息",
    password: "",
    password_check: "",
    password_show: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  onShareAppMessage: function () {

  },
  addUser: function(password){
   
    wx.request({
      url: 'http://127.0.0.1:5000/post',
      data:{
        name: password,
        age:'18'
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
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  passwordCheckInput: function (e) {
    this.setData({
      password_check: e.detail.value
    });
  } 




})