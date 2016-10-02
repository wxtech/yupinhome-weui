<template>
  <section class="login_main login_success">
    <form>
      <label>
        <span class="m">你已绑定的手机号</span>
        <p class="ltxt">13123231314</p>
        <input type="submit" size="20" value="解绑" class="inp solution" maxlength="20" name="mobile">
      </label>
      <label>
        <span>验证邮箱地址</span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
      </label>
      <label>
        <span>请输入发送到您注册时使用的邮箱的验证码</span>
        <input type="text" size="20" value="" class="inp inw ins" maxlength="20" name="mobile">
        <input type="submit" size="20" value="验证" class="inp inw" maxlength="20" name="mobile">
      </label>
    </form>
    <a href="javascript:;" class="btn_login_success" id="">下一步</a>
  </section>
</template>
<style>
  .login_main .weui_icon_success:before {
    color: #265baa;
    font-size: 73px;
  }

  .login_main label:first-child {
    padding-bottom: 5%;
  }

  .ltxt {
    text-align: left;
  }

  .login_main .solution {
    position: absolute;
    right: 0;
    top: 0;
    background: #ffffff;
    border: 1px solid #345ca5;
    width: 25%;
    top: 30%;
    height: 0.64rem;
    color: #345ca5;
  }

  .login_success {
    text-align: center;
    padding: 0 10%;
    padding-top: .5rem;
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
    padding: 5% 0;

  }

  .login_main .ins {
    float: left;
  }

  .login_main input.inp_refresh, .inw:last-child,.solution {
    font-family: microsoft yahei;
  }

  .login_main span.m {
    padding-bottom: 15px;
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
