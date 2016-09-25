<template>
 <section class="wrap">
   <h2>我的订单</h2>
  <div class="order-box">
   <order-tabbar>
     <order-tabbar-item>
       <img slot="icon" src="~assets/usercenter/dingdan-icon01-80x80.png">
       <span slot="label">全部订单</span>
     </order-tabbar-item>
     <order-tabbar-item>
       <img slot="icon" src="~assets/usercenter/dingdan-icon02-80x80.png">
       <span slot="label">待付款</span>
     </order-tabbar-item>
     <order-tabbar-item>
       <img slot="icon" src="~assets/usercenter/dingdan-icon03-80x80.png">
       <span slot="label">待发货</span>
     </order-tabbar-item>
     <order-tabbar-item>
       <img slot="icon" src="~assets/usercenter/dingdan-icon04-80x80.png">
       <span slot="label">待评价</span>
     </order-tabbar-item>
     <order-tabbar-item>
       <img slot="icon" src="~assets/usercenter/dingdan-icon05-80x80.png">
       <span slot="label">售后</span>
     </order-tabbar-item>
   </order-tabbar>
    </div>
 </section>
</template>
<style>
.order-box{
  position: relative;
  padding-bottom: 10px;
}
.wrap > h2{
  line-height: 48px;
  font-weight: normal;
  font-size: 15px;
  color: #414a55;
  padding-left: 38px;

}

.order-box .weui_tabbar{
  position: relative;
}
.order-box .weui_tabbar{
  background: none;
}
.order-box .weui_tabbar:before{
 -webkit-transform: scaleY(0.3);
  transform: scaleY(0.3);
}

.weui_tabbar_icon{
  width: 35px;
  height: 35px;
}
</style>
<script>
  import orderTabbar from 'vux/src/components/tabbar/tabbar.vue'
  import orderTabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
  export default{
    components: {
      orderTabbar,
      orderTabbarItem
    }
  }
</script>
