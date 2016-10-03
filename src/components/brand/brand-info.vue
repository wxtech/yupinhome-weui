<template>
  <section>
    <header class="j-header">
      <div class="j-header-search j-brand j-brand-info">
        <input value="" placeholder="请输入关键字" type="text">
      </div>
    </header>
    <ul class="img-box">
      <li><a href="javascript:;">
        <img src="~assets/brand/brandinfo-aga-368x368.jpg"/>
        <span>AGA</span>
      </a></li>
      <li><a href="javascript:;">
        <img src="~assets/brand/brandinfo-asko-368x368.jpg"/>
        <span>ASKO</span>
      </a></li>
      <li><a href="javascript:;">
        <img src="~assets/brand/brandinfo-BLOMBERG-368x368.jpg"/>
        <span>BLOMBERG</span>
      </a></li>
      <li><a href="javascript:;">
        <img src="~assets/brand/brandinfo-aga-368x368.jpg"/>
        <span>ARISTON</span>
      </a></li>
      <li><a href="javascript:;">
        <img src="~assets/brand/brandinfo-aga-368x368.jpg"/>
        <span>AGA</span>
      </a></li>
      <li><a href="javascript:;">
        <img src="~assets/brand/brandinfo-aga-368x368.jpg"/>
        <span>AGA</span>
      </a></li>
    </ul>
  </section>
  <section class="m-footer">
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
  </section>
</template>
<style>
  .j-brand {
    width: 100%;
    padding: 10px 5%;
  }

  .j-brand-info {
    width: 90%;
  }

  .j-header .j-brand > input {
    width: 100%;
    margin: 0;
  }

  .img-box {
    list-style: none;
    padding: 0 10px;
    padding-top: 5px;
    overflow: hidden;
    background: #f5f5f5;
  }

  .img-box li {
    float: left;
    width: 33%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
    margin-top: 10px;

  }

  .img-box li a {
    background: #ffffff;
    position: relative;
    border: 1px solid #cccccc;
  }

  .img-box li a img {
    width: 100%;
    display: block;
  }

  .img-box li a span {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    font-family: arial;
    font-size: 16px;
  }
</style>
<script>
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  export default{
    data(){
      return {}
    },
    components: {
      tabbar,
      tabbarItem
    }
  }
</script>
