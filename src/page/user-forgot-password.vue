<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <user-password :label-text="labelText"></user-password>
  <user-footer></user-footer>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  html {
    background: #f5f5f5;
  }

  .login_main a {
    padding: 0.4em 0;
  }
</style>
<script>
  import userPassword from 'components/user/user-password.vue'
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  export default {
    components: {
      userPassword,
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
