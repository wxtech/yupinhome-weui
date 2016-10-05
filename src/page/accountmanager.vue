<template>
  <x-header :left-options="{backText: '返回',showBack:true}">账号管理</x-header>
  <div class="mycustomer-main">
    <div class="my-customer-services">
      <div class="l">
        <div class="lll">
          <div class="picture"><img src="~assets/home/person.jpg" alt=""></div>
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
        <th><i class="fa fa-universal-access"></i><span>安全中心</span></th>
        <td><i class="fa fa-car"></i><span>收货地址管理</span></td>
        <td><i class="fa fa-edit"></i><span>修改密码</span></td>
      </tr>
      <tr>
        <th><i class="fa fa-file-text-o"></i><span>完善个人资料</span></th>
        <td><i></i></td>
        <td><i></i></td>
      </tr>
    </table>
    <br>
    <div class="contact-her contact-her2"><a href="###" class="button">登出</a></div>

    <div class="text-center text-center-logo text-center-logo2">
      <br>
      <img src="~assets/logo.png">
    </div>

  </div>
</template>
<style>

  .accountmanger-avaible {
    border-top: #e2e4e6 solid 1px;
    width: 100%;
    text-align: center;
    color: #265baa;
  }

  .accountmanger-avaible th {
    border-bottom: #e2e4e6 solid 1px;
    padding: 20px 0;
    font-weight: normal;
  }
  .accountmanger-avaible th,.accountmanger-avaible td{
    width: 33.3%;
  }
  .accountmanger-avaible span {
    display: block;
  }

  .accountmanger-avaible td {
    border-left: #e2e4e6 solid 1px;
    border-bottom: #e2e4e6 solid 1px;
  }

  .mycustomer-main {
    background: #fff;
    padding-top: 20px;
  }

  .my-customer-services {
    overflow: hidden;
  }

  .contact-her {
    border-bottom: #e4e4e4 solid 1px;
    border-top: #e4e4e4 solid 1px;
    padding: 15px;
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
    padding: 8px 0;
  }

  .my-customer-services .lll {
    padding-left: 15px;
  }

  .my-customer-services .l {
    width: 40%;
  }

  .my-customer-services .r {
    width: 60%;
    float: left;
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  window.jQuery = require('jquery');

  export default{
    ready(){
      require('bootstrap')
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
