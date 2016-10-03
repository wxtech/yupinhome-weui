<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <security-box></security-box>
  <user-footer></user-footer>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  html {
    background: #f5f5f5;
  }

  #app .navbar2 {
    padding-bottom: 20px;
    margin-bottom: 0;
    background: #ffffff;
  }
</style>
<script>
  import securityBox from 'components/user/security-box.vue'
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  export default {
    components: {
      securityBox,
      navBox,
      userFooter
    },
    data: function () {
      return {
        headerTitle: '安全中心'
      }
    }
  }
</script>
