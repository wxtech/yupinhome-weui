<template>
  <section class="login_main login_success">
    <p class="p1">
    <div class="infoicon">    
    <img src="~assets/usercenter/success-icon-143x143.png" />
    </div>
    </p>
    <h4>恭喜您注册成功!</h4>
    <div class="exptext">
    <p class="p1">您填写了微信号，获得了<i>1000</i>积分奖励</p>
    <p class="p1">登录后即可使用</p>
    <p class="p1">请到会员中心查看</p>
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
    padding: 0 12%;
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
    font-size: 16px!important;
    line-height: 26px;
  }

  .login_success h4 {
    color: #265baa;
    font-size: 32px;
    font-weight: normal;
    font-family: sans-serif;
    padding: 5% 0;
  }
  .exptext {
    margin-bottom:30px;
  }
  .login_main a {
    font-weight:lighter;
    padding: 10px 0;
  }
  .login_main a:active {
    background:black;
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
