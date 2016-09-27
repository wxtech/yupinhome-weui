<template>
  <!--调用头部公共组件-->
  <header class="navbar">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <user-login></user-login>
  <user-footer></user-footer>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  html {
    background: #f5f5f5;
  }
</style>
<script>
  import userLogin from 'components/user/user-login.vue'
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  export default {
    components: {
      userLogin,
      navBox,
      userFooter
    },
    data: function () {
      return {
        headerTitle: '用户注册'
      }
    }
  }
</script>
