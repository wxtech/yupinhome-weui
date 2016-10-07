<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2 navbarfull">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <category-change :search-text="searchText"></category-change>
</template>
<style>

</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import categoryChange from 'components/category/category-change.vue'
  import scroll from '../assets/scroll/move'
  export default {
    components: {
      navBox,
      categoryChange

    },
    data: function () {
      return {
        headerTitle: '可换购商品'
      }
    },
    ready(){
      scroll("#category-ul", "#category-ul li");
    }
  }
</script>
