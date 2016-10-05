<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的售后</x-header>
  <div class="mycustomer-main">
    <div class="my-customer-services">
      <div class="l">
        <div class="lll">
          <div class="picture"><img src="~assets/home/person.jpg" alt=""></div>
          <button type="button" data-toggle="modal" data-target="#changecustomerservice-dialog"
                  class="button-1 apply-changeservice">申请换客服
          </button>
        </div>
      </div>
      <div class="r">
        <div class="lll">
          <div class="inforgroup">
            <div class="items"><label for="">姓名</label><span>爱丽丝</span></div>
            <div class="items"><label for="">性别</label><span>女</span></div>
            <div class="items"><label for="">电话号码</label><span>13214231231</span></div>
            <div class="items"><label for="">所属城市</label><span>上海</span></div>
            <div class="items"><label for="">所属门店</label><span>正大广场店</span></div>
            <div class="items"><label for="">姓名</label><span>爱丽丝</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-her"><a href="###" class="button"><i class="fa fa-volume-control-phone"></i> 联系客服</a><a
      href="###"
      class="button"><i
      class="fa fa-comments-o"></i> 给他／她留言</a></div>
  </div>
  <div class="text-center text-center-logo text-center-logo2">
    <img src="~assets/logo.png">
  </div>

  <div class="modal fade" id="changecustomerservice-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">申请换客服</h4>
        </div>
        <div class="modal-body">
          <p>请说明您要换客服的理由，本站管理员将在2个工作日内与您取得联系并安排更换事宜：</p>
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import "~assets/bower_components/bootstrap/dist/css/bootstrap.css";

  .mycustomer-main {
    background: #fff;
    padding-top: 20px;
  }

  .my-customer-services {
    overflow: hidden;
  }

  .my-customer-services .inforgroup .items {
    padding: 8px 0;
    border-bottom: #e4e4e4 solid 1px;
    color: #414a55;
  }

  .my-customer-services .apply-changeservice {
    margin-top: 20px;
  }

  .contact-her {
    border-bottom: #e4e4e4 solid 1px;
    border-top: #e4e4e4 solid 1px;
    padding: 15px;
    white-space: nowrap;
    text-align: center;

  }

  .contact-her a {
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto 7px;
  }

  .my-customer-services .inforgroup label {
    width: 5em;
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
