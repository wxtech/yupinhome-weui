<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2 navbarfull">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <integral-detail></integral-detail>
  <user-footer class="footer_box_none"></user-footer>
</template>
<style>
  .footer_box_none {
    border-top: none;
  }

  #app .navbarfull {
    padding-bottom: 0;
    border-bottom: 1px solid #d9d9d9;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  import integralDetail from 'components/Integral/Integral-detail.vue'
  export default{
    data(){
      return {
        headerTitle: '积分明细'
      }
    },
    components: {
      navBox,
      userFooter,
      integralDetail
    }
  }
</script>
