<template>
  <header-box></header-box>
  <my-order></my-order>
  <my-power></my-power>
  <my-activity></my-activity>
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
  <!--弹层-->
  <layer-box class="layer_box" :has-text="hasText" :share-title="shareTitle"></layer-box>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  .black1, .layerP {
    font-family: "Microsoft YaHei UI";
  }

  .wrap .power-box .vux-flex-row {
    padding: 0px;
  }

  .title-line .card:before {
    margin-top: 19px;
  }

  .wrap .vux-flexbox .vux-flexbox-item {
    padding: 10px 0;
  }

  .wrap {
    margin-top: 10px;
  }

  .wrap .title-line {
    border-top: 1px solid #DDD8CE;
    border-top: 1px solid #DDD8CE;
    padding: 0 10px;
  }

  .memberCenter .h_bottom .mytabs .mytab-item a {
    height: 65px;
  }

  .h_bottom .mytabs .mytab-item a {
    width: 65px;
  }

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
    background-color: #f0efed;

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
    margin-bottom: 10px;
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
  .mytabs .mytab-item a:actived {
    background:#265baa;
  }
</style>
<script>
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  import headerBox from 'components/membershipecenter/header-box.vue'
  import myOrder from 'components/membershipecenter/my-order.vue'
  import myActivity from 'components/membershipecenter/my-activity.vue'
  import myPower from 'components/membershipecenter/my-power.vue'
  import layerBox from 'components/membershipecenter/member-layer.vue'
  export default {
    components: {
      tabbar,
      tabbarItem,
      headerBox,
      myOrder,
      myPower,
      myActivity,
      layerBox
    },
    data() {
      return {
        hasText: true,
        shareTitle: '将本站分享给朋友'
      }
    },
    methods: {}
  }
</script>
