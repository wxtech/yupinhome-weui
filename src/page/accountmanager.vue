<template>
  <x-header :left-options="{backText: '返回',showBack:true}">账号管理</x-header>
  <div class="mycustomer-main">
    <div class="my-customer-services">
      <div class="l">
        <div class="lll">
          <div class="picture"><img src="~assets/usercenter/img-220x220.jpg" alt=""></div>
        </div>
      </div>
      <div class="r">
        <div class="lll">
          <div class="inforgroup">
            <div class="itemss"><label for=""><b>Robort</b></label></div>
            <div class="itemss"><label for="">普通会员</label></div>
            <div class="itemss"><label for="">邮箱：未设置</label></div>
            <div class="itemss"><label for="">电话：13432423426</label></div>
          </div>
        </div>
      </div>
    </div>
    <table cellpadding="0" cellspacing="0" class="accountmanger-avaible">
      <tr>
        <th class="active"><a class="accountbtn"><img src="~assets/usercenter/account-manage-icon01-120x120.png"/><span>安全中心</span></a>
        </th>
        <td><a class="accountbtn"><img
          src="~assets/usercenter/account-manage-icon02-120x120.png"/><span>收货地址管理</span></a></td>
        <td><a class="accountbtn"><img src="~assets/usercenter/account-manage-icon03-120x120.png"/><span>修改密码</span></a>
        </td>
      </tr>
      <tr>
        <th><a class="accountbtn"><img
          src="~assets/usercenter/account-manage-icon04-120x120.png"/><span>完善个人资料</span></a></th>
        <td><i></i></td>
        <td><i></i></td>
      </tr>
    </table>
    <br>
    <div class="contact-her contact-her2"><a href="###" class="button logoutbtn">登出</a></div>

    <div class="text-center text-center-logo text-center-logo2">
      <br>
      <img src="~assets/logo.png">
    </div>

  </div>
</template>
<style>
  .picture img {
    border-radius: 50%;
    width: 100px;
    height: auto;
  }

  .accountmanger-avaible {
    border-top: #e2e4e6 solid 1px;
    width: 100%;
    text-align: center;
    color: #265baa;
  }

  .accountmanger-avaible .active {
    background: #f7f7f7;
  }

  .accountmanger-avaible th {
    border-bottom: #e2e4e6 solid 1px;
    font-weight: normal;
    height: 1vw;
  }

  .accountmanger-avaible th, .accountmanger-avaible td {
    width: 33.3%;
    padding: 0;
  }

  .accountmanger-avaible th a, .accountmanger-avaible td a {
    padding: 24px 0;
    width: 100%;
    height: 30vw;
    z-index: 2;
  }

  .accountmanger-avaible span {
    display: block;
  }

  .accountmanger-avaible td {
    border-left: #e2e4e6 solid 1px;
    border-bottom: #e2e4e6 solid 1px;
  }

  .accountbtn img {
    width: 50px;
  }

  .mycustomer-main {
    background: #fff;
    padding-top: 10px;
  }

  .my-customer-services {
    overflow: hidden;
    margin-bottom: 15px;
  }

  .contact-her {
    border-bottom: #e4e4e4 solid 1px;
    border-top: #e4e4e4 solid 1px;
    padding: 15px 0 40px;
    white-space: nowrap;
    text-align: center;
  }

  .contact-her2 {
    border-top: none;
  }

  .contact-her a {
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto 7px;
  }

  .my-customer-services .inforgroup .itemss label {
    width: auto;
    padding: 2px 0;
    font-size: 13px;
  }

  .my-customer-services .inforgroup .itemss label b {
    font-size: 18px;
    font-weight: normal;
    line-height: 18px;
    margin-top: 5px;
  }

  .my-customer-services .lll {
    padding-left: 15px;
  }

  .my-customer-services .l {
    width: 30%;
  }

  .my-customer-services .r {
    width: 70%;
    float: left;
  }

  .contact-her a.logoutbtn {
    background: #6fa4d8;
    width: 80%;
    border-radius: 0;
  }

  .contact-her a.logoutbtn:active {
    background: #265baa;
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  import $ from 'jquery'
  window.jQuery = require('jquery');

  export default{
    ready(){
      require('bootstrap')
      var w = $('.accountmanger-avaible th').width();
      $('.accountmanger-avaible th').css('height', w);
    },
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      xHeader
    }
  }
</script>
