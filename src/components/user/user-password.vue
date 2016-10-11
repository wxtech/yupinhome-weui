<template>
  <section class="login_main">
    <form>
      <label>
        <span>请输入您注册时提供的电话号码<i>*</i></span>
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
      <a href="javascript:;" class="btn_login" id="loginAction">下一步</a>
    </form>
  </section>
</template>
<style>

</style>
<script>
  export default{}
</script>
