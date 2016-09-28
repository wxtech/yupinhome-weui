<template>
  <x-header>
    <div class="title" v-text="headerTitle"></div>
  </x-header>
</template>
<style>
  .navbar {
    border-bottom: 1px solid #d9d9d9;
  }
  .navbar .vux-header {
    background: #ffffff;
    box-shadow: 0px -32px 67px #265baa;
    box-shadow: 0px -32px 67px #265baa;
    z-index: 9;
  }
  .navbar .vux-header .vux-header-left .vux-header-back {
    color: #ffffff;
  }
  .title {
    color: #265baa;
  }
  .navbar .vux-header .vux-header-left .vux-header-back:before {
    border: none;
    border: 1px solid #265baa;
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    left: 0;
    width: 12px;
    height: 12px;
    /*border: 1px solid #ccc;*/
    border-width: 1px 0 0 1px;
    margin-left: 3px;
    margin-top: 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header/index.vue'
  export default{
    props: {
      headerTitle: String
    },
    components: {
      xHeader
    }
  }
</script>
