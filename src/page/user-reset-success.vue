<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <user-reset-success></user-reset-success>
  <user-footer></user-footer>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  #app .navbar2 {
    border: none;
  }

  html {
    background: #f5f5f5;
  }
</style>
<script>
  import userResetSuccess from 'components/user/user-reset-success.vue'
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  export default {
    components: {
      userResetSuccess,
      navBox,
      userFooter
    },
    data: function () {
      return {
        headerTitle: '忘记密码'
      }
    }
  }
</script>
