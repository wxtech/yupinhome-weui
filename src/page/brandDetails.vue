<template>
  <!--调用头部公共组件-->
  <section class="brand-details-navBar">
    <header class="navbar j-brandDetail">
      <nav-box :header-title="headerTitle">
      </nav-box>
    </header>
  </section>
  <brand-details></brand-details>
</template>
<style>
  .brand-details-navBar {
    overflow: hidden;
    height: 50px;
  }

  .j-brandDetail {
    border: none;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import brandDetails from 'components/brand/brand-details.vue'
  export default{
    data(){
      return {
        headerTitle: 'ARISTON'
      }
    },
    components: {
      navBox,
      brandDetails
    }
  }
</script>
