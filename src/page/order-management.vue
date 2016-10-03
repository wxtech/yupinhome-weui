<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2 navbar3">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <order-list></order-list>
</template>
<style>
  #app .navbar3 {
    padding-bottom: 0px;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import orderList from 'components/user/order-list.vue'
  export default{
    data(){
      return {
        headerTitle: '我的订单'
      }
    },
    components: {
      navBox,
      orderList
    }
  }
</script>
