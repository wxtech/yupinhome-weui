<template>
  <header-box></header-box>
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
<style>
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
</style>
<script>
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  import headerBox from 'components/membershipecenter/header-box.vue'
  export default {
    components: {
      tabbar,
      tabbarItem,
      headerBox
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>
