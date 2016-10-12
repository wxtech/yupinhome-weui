<template>
  <!--商品分类-品牌检索页-->
  <category-brand-container :search-text="searchText"></category-brand-container>
  <!--<category-box></category-box>-->
  <section class="m-footer">
    <div class="weui_tabbar tabbar-fixed">
      <a href="javascript:;" class="weui_tabbar_item">
        <div class="weui_tabbar_icon">
          <img slot="icon" class="icon1" src="~assets/usercenter/bottombar-icon01-80x80.png">
          <img slot="icon" class="icon2" src="~assets/home/bottombar-icon01-80x80-actived.png">
          <sup></sup>
        </div>
        <p class="weui_tabbar_label">
          <span slot="label">首页</span>
        </p>
      </a>
      <a href="javascript:;" class="weui_tabbar_item">
        <div class="weui_tabbar_icon">
          <img slot="icon" class="icon1" src="~assets/usercenter/bottombar-icon02-80x80.png">
          <img slot="icon" class="icon2" src="~assets/home/bottombar-icon02-80x80-actived.png">
          <sup></sup>
        </div>
        <p class="weui_tabbar_label">
          <span slot="label">全部商品</span>
        </p>
      </a>
      <a href="javascript:;" class="weui_tabbar_item">
        <div class="weui_tabbar_icon">
          <img slot="icon" class="icon1" src="~assets/usercenter/bottombar-icon03-80x80.png">
          <img slot="icon" class="icon2" src="~assets/home/bottombar-icon03-80x80-actived.png">
          <sup></sup>
        </div>
        <p class="weui_tabbar_label">
          <span slot="label">在线咨询</span>
        </p>
      </a>
      <a href="javascript:;" class="weui_tabbar_item">
        <div class="weui_tabbar_icon">
          <img slot="icon" class="icon1" src="~assets/usercenter/bottombar-icon04-80x80.png">
          <img slot="icon" class="icon2" src="~assets/home/bottombar-icon04-80x80-actived.png">
          <sup></sup>
        </div>
        <p class="weui_tabbar_label">
          <span slot="label">购物车</span>
        </p>
      </a>
      <a href="javascript:;" class="weui_tabbar_item">
        <div class="weui_tabbar_icon">
          <img slot="icon" class="icon1" src="~assets/usercenter/bottombar-icon05-80x80.png">
          <img slot="icon" class="icon2" src="~assets/home/bottombar-icon05-80x80-actived.png">
          <sup></sup>
        </div>
        <p class="weui_tabbar_label">
          <span slot="label">会员中心</span>
        </p>
      </a>
    </div>
  </section>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  html {
    font-size: 50px;
    font-family: Arial, "Microsoft YaHei UI";
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    min-width: 320px;
    overflow-x: hidden;
  }

  body {
    font-family: Arial, "Microsoft YaHei UI";
    font-size: .28em;
    /*line-height: 1;*/
    color: #333;
    background-color: #f5f5f5;

  }

  a, div, header, span {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  img, img a {
    border: 0;
    vertical-align: middle;
  }

  .m-footer {
    font-size: .28rem;
    width: 100%;
    /* height: 1rem; */
    /* border-top: #d5d5d5 solid 1px; */
    position: fixed;
    /* left: -100%; */
    bottom: 0;
    z-index: 6;
    margin: 0px;
  }

  section {
    margin: 0 auto;
    /*margin-bottom: 10px;*/
    background: #ffffff;
    width: 100%;
    /*max-width: 800px;*/
    font-size: .28rem;
    position: relative;
  }

  #app .weui_tabbar {
    background: none;
    background: #ffffff;
  }

  #app .m-footer .weui_tabbar {
    padding-bottom: 10px;
  }

  .j-header {
    position: fixed !important;
    left: 0;
    top: 0;
    right: 0;
  }

  .height {
    height: 53px;
  }
</style>
<script>
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  import categoryBrandContainer from 'components/category/category-brand-container.vue'
  import scroll from '../assets/scroll/move'
  export default {
    components: {
      tabbar,
      tabbarItem,
      categoryBrandContainer

    },
    data: function () {
      return {
        searchText: '切换分类检索'
      }
    },
    ready(){
      scroll("#category-ul", "#category-ul li");
    }
  }
</script>
