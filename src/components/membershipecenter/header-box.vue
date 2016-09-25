<template>
  <section class="memberCenter">
    <div class="content">
      <div class="head-top">
        <img slot="icon" src="~assets/usercenter/img-220x220.jpg">
        <span>账号管理</span>
      </div>
      <div class="person_i">
        <div class="membername">
          <p class="p1">Robort</p>
          <p class="p2">普通会员</p>
          <p class="p-text">您的帐号信息尚不完善，请在帐号管理中完善您的帐号</p>
        </div>
      </div>
      <div class="area">
        <div class="area-right">
         <span class="msg-box">
          <img src="~assets/usercenter/top-xiaoxi-88x88.png">
           <p>消息</p>
          </span>
          <span>
           <img src="~assets/usercenter/top-erweima-88x88.png">
           <p>推荐朋友</p>
          </span>
        </div>
        <p>签到赢积分</p>
      </div>
    </div>
    <div class="h_bottom">
      <header-tabbar>
        <header-tabbar-item>
          <img slot="icon" src="~assets/usercenter/shoucang-icon-140x140.png">
          <span slot="label">首页</span>
        </header-tabbar-item>
        <header-tabbar-item>
          <img slot="icon" src="~assets/usercenter/yuyue-icon-140x140.png">
          <span slot="label">全部商品</span>
        </header-tabbar-item>
        <header-tabbar-item>
          <img slot="icon" src="~assets/usercenter/kefu-icon-140x140.png">
          <span slot="label">在线咨询</span>
        </header-tabbar-item>
      </header-tabbar>
    </div>
  </section>
</template>
<style>
  /* body {
     background-color: #ff0000;
   }*/
  .memberCenter {
    background-size: 100% 100%;
    padding-bottom: 10px;
    padding-top: .21rem;
    position: relative;
    background: #ffffff;
  }

  .memberCenter .weui_tabbar {
    background: none;
  }

  .memberCenter .weui_tabbar:before {
    border-top: none;
  }

  .content {
    padding: 0 .24rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    padding-bottom: .3rem;
    color: #fff;
  }

  .content .head-top {

    text-align: center;
  }

  .content .head-top > span {
    color: #424954;
    font-size: 15px;
    padding-top: 10px;

  }

  .content .head-top > img {
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border: .04rem solid #f9b5b6;
  }

  .membername .p1 {
    color: #414a55;
  }

  .p2 {
    color: #414a55;
    font-size: 17px;
  }

  .p-text {
    color: #7c858d;
    font-size: 17px;
    line-height: 23px;
  }

  .content .person_i {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: .2rem;
    padding-top: .25rem;
  }

  .area, .msg-box {
    position: relative;
  }

  .area span {
    display: inline-block;
    float: left;
    color: #265baa;
    font-size: 15px;
    text-align: center;
  }

  .area span:nth-of-type(1) {
    float: left;
  }

  .area span:nth-of-type(2) {
    float: right;
  }

  .area img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .area > p {
    line-height: 38px;
    background: #265baa;
    display: inline-block;
    color: #ffffff;
    padding: 0 34px;
    margin-top: 10px;
  }

  .area-right {
    display: block;
  }

  .h_bottom {
    margin: 0;
    border-top: 1px solid #DDD8CE;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative;
    left: 0;
    bottom: 0;
    height: 1.8rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    text-align: center;
    font-size: .24rem;
  }

  .h_bottom .weui_tabbar_icon {
    background: #6fa4d8;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    top: 0px;
  }
 .weui_tabbar_item span{
    font-size: 15px;
    color: #265baa;
  }
</style>
<script>
  import headerTabbar from 'vux/src/components/tabbar/tabbar.vue'
  import headerTabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  export default{
    components: {
      headerTabbar,
      headerTabbarItem
    }
  }
</script>
