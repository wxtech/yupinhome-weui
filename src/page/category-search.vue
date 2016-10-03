<template>
  <!--商品检索页-->
  <category-search-container :search-text="searchText"></category-search-container>
  <!--<category-box></category-box>-->

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
</style>
<script>
  import categorySearchContainer from 'components/category/category-search-container.vue'
  export default {
    components: {
      categorySearchContainer
    },
    data: function () {
      return {
        searchText: '切换品牌检索'
      }
    },
    methods: {}

  }
</script>
