<template>
  <div class="user-box">
    <p><label>
      <span>请输入用户名<i>*</i></span>
      <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
    </label></p>
    <p>
      <label>
        <span>请输入您的电话号码<i>*</i></span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
      </label>
    </p>
    <p>
      <label>
        <span>请输入图形验证码<i>*</i></span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
      </label>
    </p>
    <p>
      <label>
        <span>请输入短信验证码<i>*</i></span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
      </label>
    </p>
    <p>
      <label>
        <span>微信号<i>*</i></span>
        <input type="text" size="20" value="" class="inp" maxlength="20" name="mobile">
        <span class="tips">填写微信号可获得1000积分奖励</span>
      </label>
    </p>
  </div>
</template>
<style>
  .user-box {
    text-align: center;
    width: 100%;
    background: #ffffff;
  }

  .user-box label {
    display: inline-block;
    width: 90%;
    padding-top: 10px;
  }

  .user-box span {
    color: #6f6f6f;
    font-size: 18px;
    display: block;
    text-align: left;
    padding: 10px 0px;
  }

  .user-box i {
    color: #ff4b4b;
  }

  .user-box input {
    border: 1px solid #999999;
    width: 100%;
    height: 40px;
    padding-left: 5px;
  }

  .user-box .tips {
    font-size: 12px;
  }
</style>
<script>
  export default{}
</script>
