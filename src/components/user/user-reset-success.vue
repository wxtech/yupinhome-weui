<template>
  <section class="login_main login_success">
    <p class="p1">
    <div class="infoicon">    
    <img src="~assets/usercenter/success-icon-143x143.png" />
    </div>
    </p>
    <h4>您的密码已重设成功！</h4>
    <div class="exptext">
    <p class="p1">请使用新密码重新登录</p>
    </div>
    <a href="javascript:;" class="btn_login_success" id="">登录</a>
  </section>
</template>
<style>
  .login_main .weui_icon_success:before {
    color: #265baa;
    font-size: 73px;
  }

  .login_success {
    text-align: center;
    padding: 0 10%;
    padding-top: 1rem;
  }

  .login_main i {
    font-style: normal;
  }

  .login_success {
    padding-bottom: 20%;
  }

  .login_main .p1 {
    color: #265baa;
    font-size: 16px;
    line-height: 26px;
  }

  .login_success h4 {
    color: #265baa;
    font-size: 32px;
    font-weight: normal;
    font-family: sans-serif;
    padding:5% 0;

  }
</style>
<script>
  import icon from 'vux/src/components/icon/index.vue'
  export default{
    components: {
      icon
    }
  }
</script>
