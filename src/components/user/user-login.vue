<template>
  <section class="login_main">
    <form>
      <label>
        <span>请输入用户名<i>*</i></span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
      </label>
      <label>
        <span>请输入您的电话号码<i>*</i></span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
      </label>
      <label>
        <span>请输入图形验证码<i>*</i></span>
        <input type="text" size="20" value="" class="inp inp_pic" maxlength="20" name="mobile">
        <span class="icon_pic"><img slot="icon" src="~assets/usercenter/code.png"></span>
        <div class="btn_refresh">
          <input type="submit" size="20" value="" class="inp inp_refresh" maxlength="20" name="mobile">
          <i class="fa fa-undo"></i>
        </div>
      </label>
      <label>
        <span>请输入短信验证码<i>*</i></span>
        <input type="text" size="20" value="" class="inp inw" maxlength="20" name="mobile">
        <input type="submit" size="20" value="获取验证码" class="inp inw" maxlength="20" name="mobile">
      </label>
      <label>
        <span>微信号</span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
        <span class="tips">填写微信号可获得1000积分奖励</span>
      </label>
      <a href="javascript:;" class="btn_login" id="loginAction">下一步</a>
    </form>
  </section>
</template>
<style>
  .login_main {
    margin: 0 auto;
    background: #ffffff;
    max-width: auto;
    font-size: 100%;
    margin-bottom: 0px;
    position: relative;
    width: auto;
    padding: .4rem 0.875rem 0.5rem;
    border-bottom: 1px solid #265baa;
  }

  .login_main form {
    -webkit-text-size-adjust: 100%;
    font-size: 100%;
  }

  .login_main label {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-top: 0.60em;
    overflow: hidden;
  }

  .btn_refresh {
    display: inline;
    position: relative;
  }

  .login_main .fa {
    position: absolute;
    z-index: 9999;
    top: -3px;
    left: 0;
    right: 0;
    font-size: 25px;
    color: #265baa;
    text-align: center;

  }

  .login_main span {
    color: #6f6f6f;
    font-size: 14px;
    display: block;
    text-align: left;
    padding: 0px 0px 5px;
  }

  .login_main .icon_pic {
    width: 20%;
    display: inline-block;
    vertical-align: middle;
    padding: 0px 4%;
    overflow: hidden;
  }

  .login_main span:last-child {
    padding-top: 10px;
  }

  .login_main i {
    color: #ff4b4b;
  }

  .login_main input {
    border: 1px solid #999999;
    width: 100%;
    height: 40px;
    width: 100%;
    height: 100%;
    padding-left: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 2.78em;
  }

  .login_main .tips {
    font-size: 12px;
  }

  .btn_login {
    display: inline-block;
    width: 100%;
    padding: 0.655em 0;
    text-align: center;
    font-size: 1.25em;
    background: #265baa;
    margin-top: 0.8rem;
    letter-spacing: .38em;
    color: #FFFFFF;
  }

  .login_main .inp_pic {
    width: 50%;
  }

  .login_main .inp_refresh {
    width: 17%;
    vertical-align: middle;
  }

  .login_main .inw {
    width: 45%;
  }

  .inw:first-child {
    float: left;
  }

  .inw:last-child {
    float: right;

  }

  .login_main input.inp_refresh, .inw:last-child {
    color: #345ca5;
    border: 1px solid #345ca5;
    background: #FFFFFF;
  }
</style>
<script>
  export default{}
</script>
