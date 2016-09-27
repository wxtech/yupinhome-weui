<template>
  <div class="webside-top">
    <div class="lf">
      <div class="logo">
        <img src="~assets/logo.png">
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
    <div class="ad-item"><img src="~assets/home/img2.png"></div>
  </div>

  <div class="a-d">
    <div class="l">
      <a class="a-d-content">
        <img src="~assets/home/final_02.jpg">
        <span>品味生活</span>
      </a>
    </div>

    <div class="r">
      <a class="a-d-content">
        <img src="~assets/home/final_03.jpg">
        <span>厨房家电</span>
      </a>
    </div>
  </div>
</template>
<style scope>
  @import "~assets/font-awesome/css/font-awesome.css";

  .a-d .a-d-content {
    position: relative;
  }

  .a-d .a-d-content span {
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    width: 100%;
    font-size: 14px;
    color: #fff;
    padding: 5px;
  }

  .a-d .l .a-d-content span {
    background: rgba(49, 14, 12, 0.5);

  }

  .a-d .r .a-d-content span {
    background: rgba(255, 255, 255, 0.5);
  }

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

  .a-d .r {
    float: right;
    width: 50%;

  }

  .a-d .l {
    float: left;
    width: 50%;
  }

</style>
<script>
  import swiper from 'vux/src/components/swiper'
  import swiperItem from 'vux/src/components/swiper-item'
  import flexbox from 'vux/src/components/flexbox'
  import flexboxItem from 'vux/src/components/flexbox/flexbox-item.vue'

  export default {
    components: {
      flexbox,
      flexboxItem,
      swiper,
      swiperItem
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
