<template>
  <!--调用头部公共组件-->
  <header class="navbar goodsBar">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <!--商品详情-->
  <goods-details></goods-details>
  <!--<layer-box class="layer_box" :has-text="hasText" :share-title="shareTitle"></layer-box>-->
</template>
<style>
  .goodsBar {
    border: none;
  }

  .swiper-container2 {
    width: 80%;
  }

  .swiper-container2 {
    height: 256px;
  }

  .goodsBar .swiper-pagination {
    bottom: 24px;
  }

  .goodsBar .vux-header {
    box-shadow: none;
    box-shadow: none;
  }
</style>
<script>
  import goodsDetails from 'components/category/goods-details.vue'
  import layerBox from 'components/membershipecenter/member-layer.vue'
  import navBox from 'components/user/header-title.vue'
  export default{
    data(){
      return {
        hasText: false,
        shareTitle: '将此商品分享给朋友'
      }
    },
    components: {
      goodsDetails,
      layerBox,
      navBox
    }
  }
</script>
