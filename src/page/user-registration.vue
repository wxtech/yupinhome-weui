<template>
  <!--调用头部公共组件-->
  <header class="navbar">
  <nav-box :header-title="headerTitle">
  </nav-box>
  </header>
  <user-login></user-login>
</template>
<style>
</style>
<script>
  import userLogin from 'components/user/user-login.vue'
  import navBox from 'components/user/header-title.vue'
  export default {
    components: {
      userLogin,
      navBox
    },
    data: function () {
      return {
        headerTitle: '用户注册'
      }
    }
  }
</script>
