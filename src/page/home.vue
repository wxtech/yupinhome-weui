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
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="title-slider">
          <div><img class="titles-bgs animated" src="~assets/home/slidertext01-266x45.png"/></div>
          <div><img class="titles-bgs animated" src="~assets/home/slidertext02-266x30.png"/></div>
          <div class="text-center">
            <a class="animated">了解更多</a>
          </div>
        </div>
        <img class="slider-bgs" src="~assets/home/banner1.jpg"/></div>
      <div class="swiper-slide">
        <div class="title-slider">
          <div><img class="titles-bgs animated" src="~assets/home/slidertext01-266x45.png"/></div>
          <div><img class="titles-bgs animated" src="~assets/home/slidertext02-266x30.png"/></div>
          <div class="text-center">
            <a class="animated">了解更多</a>
          </div>
        </div>
        <img class="slider-bgs" src="~assets/home/banner1.jpg"/></div>
      <div class="swiper-slide">
        <div class="title-slider">
          <div><img class="titles-bgs animated" src="~assets/home/slidertext01-266x45.png"/></div>
          <div><img class="titles-bgs animated" src="~assets/home/slidertext02-266x30.png"/></div>
          <div class="text-center">
            <a class="animated">了解更多</a>
          </div>
        </div>
        <img class="slider-bgs" src="~assets/home/banner1.jpg"/></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="mytabs">
    <div class="mytab-item"><a class=""><img src="~assets/home/home-iconp01-140x140.png"></a><span>关于御品家</span></div>
    <div class="mytab-item"><a class=""><img src="~assets/home/home-iconp02-140x140.png"></a><span>热卖商品</span></div>
    <div class="mytab-item"><a class=""><img src="~assets/home/home-iconp03-140x140.png"></a><span>特惠推广</span></div>
    <div class="mytab-item"><a class=""><img src="~assets/home/home-iconp04-140x140.png"></a><span>预约到店</span></div>
  </div>
  <div class="ad">
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/usercenter/ad-1242x455.jpg"></div>
    <div class="ad-item"><img src="~assets/home/ad02-1242x455.jpg"></div>
    <div class="text-center">
      <br>
      没有更多了
      <br>
      <br>
      <br>
    </div>
  </div>
  <tabbar class="tabbar-fixed">
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
  @import "~assets/swiper/dist/idangerous.swiper.css";
  @import "~assets/swiper/dist/animate.min.css";

  .webside-top {
    overflow: hidden;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10;
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
    width: 60.87%;
    height: 14vw;
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

  .swiper-container {
    height: 200px;
    width: 100%;
  }

  .swiper-container .slider-bgs {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;
  }

  .swiper-pagination {
    width: 100%;
    display: block;
    text-align: center;
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
  }

  .swiper-pagination-switch {
    width: 15px;
    height: 2px;
    background: #6fa4d8;
    margin: 0 5px;
    display: inline-block;
  }

  .swiper-active-switch {
    background: #265baa;
  }

  .title-slider .titles-bgs {
    max-width: 50%;
  }

  .title-slider {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .title-slider div {
    margin-bottom: 5px;
  }

  .title-slider .text-center a {
    background: #265baa;
    color: #fff;
    padding: 5px 30px;
    font-size: 12px;
  }

  .tabbar-fixed {
    position: fixed !important;
  }
</style>
<script>
  import $ from '../assets/swiper/dist/jquery-1.10.1.min'
  import Swiper from '../assets/swiper/dist/idangerous.swiper.min'
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  export default {
    ready(){
      let cssClassNames = 'fadeInDown';
      let swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: '.swiper-pagination',
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // And if we need scrollbar
        scrollbar: '.swiper-scrollbar',
        autoplay: 6000,
        speed: 2000,
        onSlideChangeStart: function () {
          $(swiper.container).find('.titles-bgs,a').removeClass(cssClassNames).hide();
        },
        onSlideChangeEnd: function () {
          var elements = $(swiper.container).find('.swiper-slide-active .titles-bgs,.swiper-slide-active a').toArray();
          (function doAnmiate() {
            var ele = elements.pop();
            if (ele) {
              $(ele).show().addClass(cssClassNames).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                doAnmiate();
              });
            }
          })();
        }
      });
    },
    components: {
      tabbarItem,
      tabbar
    },
    data: function () {
      return {}
    },
    methods: {
      change () {
        console.log('aaa')
      }
    }
  }
</script>
