<template>
  <section class="login_main login_success">
    <p class="p1">
      <i class="icon_img"><img src="~assets/usercenter/waiting-icon-143x143.png"/></i>
    </p>
    <h4>线下支付凭证等待审核中...</h4>
    <p class="p1">您的线下支付凭证将由您的客服提交审核，</p>
    <p class="p1">审核结果将在2个工作日内完成，</p>
    <p class="p1">请耐心等待。如需帮助请联系客服。</p>
    <a href="javascript:;" class="btn_login_success contact">联系客服</a>
    <a href="javascript:;" class="btn_login_success continue">继续购物</a>
  </section>
</template>
<style>
  .icon_img {
    width: 20%;
  }

  .login_main a.contact {
    background: #ffffff;
    border: 1px solid #265baa;
    color: #265baa;
  }

  .login_main .continue {
    margin-top: 0.3rem;
  }

  .login_success h4 {
    font-size: 26px;
  }

  .login_main .p1 {
    font-size: 12px;
  }
</style>
<script>
  export default{
    data(){
      return {}
    },
    components: {}
  }
</script>
