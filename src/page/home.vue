<template>
  <div class="webside-top">
    <div class="lf">
      <div class="logo">
        <img src="~assets/home/homelogo-142x108.jpg">
      </div>
    </div>
    <div class="fr">
      <div class="search-section">
        <input type="text"/>
        <i class="fa fa-search"></i>
      </div>
    </div>
  </div>
  <swiper auto>
    <swiper-item>
      <img src="~assets/home/banner1.png"/>
    </swiper-item>
    <swiper-item>
      <img src="~assets/home/banner1.png"/>
    </swiper-item>
  </swiper>

  <div class="mytabs">
    <div class="mytab-item"><a class=""><img src="~assets/usercenter/yuyue-icon-140x140.png"></a><span>关于御品家</span>
    </div>
    <div class="mytab-item"><a class=""><img src="~assets/usercenter/yuyue-icon-140x140.png"></a><span>热卖商品</span></div>
    <div class="mytab-item"><a class=""><img src="~assets/usercenter/yuyue-icon-140x140.png"></a><span>特惠推广</span></div>
    <div class="mytab-item"><a class=""><img src="~assets/usercenter/yuyue-icon-140x140.png"></a><span>预约到店</span></div>
  </div>
  <div class="ad">
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
  </div>

  <tabbar>
    <tabbar-item>
      <img slot="icon" src="~assets/usercenter/bottombar-icon01-80x80.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/usercenter/bottombar-icon02-80x80.png">
      <span slot="label">全部商品</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/usercenter/bottombar-icon03-80x80.png">
      <span slot="label">在线咨询</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/usercenter/bottombar-icon04-80x80.png">
      <span slot="label">购物车</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/usercenter/bottombar-icon05-80x80.png">
      <span slot="label">会员中心</span>
    </tabbar-item>
  </tabbar>
</template>
<style scope>
  @import "~assets/font-awesome/css/font-awesome.css";

  .webside-top {
    overflow: hidden;
  }

  .webside-top .lf {
    float: left;
    width: 20%;
  }

  .mytabs {
    text-align: center;
    white-space: nowrap;
    color: #265baa;
    padding: 15px 0;
  }

  .mytabs .mytab-item {
    display: inline-block;
    width: 23%;
    text-align: center;
  }

  .mytabs span {
    display: block;
  }

  .mytabs .mytab-item {
    position: relative;
  }

  .mytabs .mytab-item a {
    border-radius: 50%;
    background: #6fa4d8;
    display: inline-block;
    width: 80%;
    height: 18vw;
    position: relative;

  }

  .mytabs .mytab-item a img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .webside-top .fr {
    width: 80%;
    float: right;
  }

  .search-section {
    margin-top: 10px;
    border: #275bab solid 1px;
    display: block;
    color: #275bab;
    margin-right: 12px;
    white-space: nowrap;
  }

  .vux-swiper-item img {
    width: 100%;
  }

  .search-section i {
    vertical-align: middle;
  }

  .search-section input {
    height: 25px;
    line-height: 25px;
    display: inline-block;
    width: 87%;
    vertical-align: middle;
    outline: none;
  }

  .logo {
    padding: 10px;
    padding-left: 12px;
  }

  .vux-slider > .vux-indicator, .vux-slider .vux-indicator-right {
    text-align: center !important;
    width: 100% !important;
    right: 0px;
    bottom: 10px;
    left: 0;

  }

  .vux-slider > .vux-indicator > a, .vux-slider .vux-indicator-right > a {
    float: none !important;
  }

  .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot {
    width: 20px !important;
  }

</style>
<script>
  import swiper from 'vux/src/components/swiper'
  import swiperItem from 'vux/src/components/swiper-item'
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'

  export default {
    components: {
      swiper,
      swiperItem,
      tabbarItem,
      tabbar
    },
    data: function () {
      return {}
    },
    methods: {
      change () {
      }
    }
  }
</script>
