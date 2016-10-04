<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的收藏</x-header>
  <div class="personData bg">
    <form role="form">
      <div class="form-img clear">
        <div class="picture l"><img src="~assets/home/person.jpg" alt=""></div>
        <div class="r"><button type="button" data-toggle="modal" data-target="#data-1" class="button-1">修改</button></div>
      </div>
      <div class="form-group">
        <label>昵称</label>
        <input type="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="form-phone">
        <div class="r">
          <button type="button" data-toggle="modal" data-target="#data-2" class="button-1">修改</button>
        </div>
        <div>
          <p>电话号码</p>
          <p class="col-2">1312343443</p>
        </div>
      </div>
      <div class="form-group">
        <label>性别</label>
        <div class="sex clear">
          <label><input type="radio" name="sex" checked/><span>男</span></label>
          <label><input type="radio" name="sex"/><span>女</span></label>
        </div>
      </div>
      <div class="form-group">
        <select>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
          <option>1984</option>
        </select>
        年
        <select class="select-1">
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        月
        <select class="select-1">
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
        </select>
        日
        <p>*填写生日可享生日礼包</p>
      </div>
      <div class="form-group">
        <label>所在地<b class="col-1">*</b></label>
        <select>
          <option>上海</option>
          <option>北京</option>
        </select>
        省
        <select>
          <option>浦东新区</option>
          <option>黄浦区</option>
          <option>徐汇区</option>
        </select>
        市
        <input type="text" class="form-control margin-t" placeholder="请输入详细地址">
      </div>
      <div class="form-group">
        <label>电子邮箱</label>
        <input type="email" class="form-control">
      </div>
      <div class="form-group">
        <label>微信号</label>
        <input type="password" class="form-control">
        <p>填写微信号可获得1000积分奖励</p>
      </div>
      <div class="form-group">
        <label>微博号</label>
        <input type="password" class="form-control">
        <p>填写微信号可获得1000积分奖励</p>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="message"><span>所有消息</span></label>
        <label><input type="checkbox" name="sell"><span>促销、活动提醒</span></label>
        <label><input type="checkbox" name="order"><span>订单状态</span></label>
        <label><input type="checkbox" name="account"><span>账户变动</span></label>
      </div>
      <div class="mar-btn"><a href="###" class="button">下一步</a></div>
    </form>
  </div>
  <div class="modal fade" id="data-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel-1">请选择照片</h4>
        </div>
        <div class="modal-body">
          <label class="modal-file">
            <input type="file">
            <span class="picture"><img src="~assets/home/person.jpg" alt=""></span>
          </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="data-2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel-2">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel-2">请输入手机号</h4>
        </div>
        <div class="modal-body">
          <input type="text">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import "~assets/bower_components/bootstrap/dist/css/bootstrap.css";

  .personData {
    padding: 12px 8%;
  }
  .form-img{
    margin-bottom: 15px;
  }
  .form-img .picture{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }
  .form-img img{
    width: 100%;
    height: 100%;
  }
  .form-img .r{
    padding-top: 15px;
    width: 80px;
  }
  .form-phone{
    margin-bottom: 15px;
  }
  .form-phone .col-2{
    padding-top: 4px;
  }
  .form-phone .r{
    width: 80px;
  }
  .sex label{
    display: block;
    float: left;
    width: 50%;
    line-height: 38px;
    text-align: center;
  }

  .sex label input{
    display: none;
  }
  .sex label span{
    display: block;
    border: 1px solid #ddd;
  }
  .sex label input:checked + span{
    background: #265baa url("~assets/home/select.png") no-repeat 30% center;
    background-size: 16px 16px;
    border: 1px solid #265baa;
    color: #fff;
  }
  .personData .form-group p{
    margin-top: 5px;
    color: #b1b1b1;
    font-size: 12px;
  }
  .personData .form-group > label{
    color: #666;
    margin-bottom: 5px;
  }
  .personData select{
    width: 80px;
    height: 32px;
  }
  .personData .select-1{
    width: 60px;
  }
  .modal-file{
    display: block;
    text-align: center;
  }
  .modal-file input{
    display: none;
  }
  .modal-file img{
    width: 100%;
    height: 100%;
  }
  .margin-t{
    margin-top: 8px;
  }
  .checkbox label{
    margin-right: 15px;
    margin-bottom: 10px;
  }
  .checkbox label input{
    position: relative;
    top: 6px;
  }
  .modal-footer{
    text-align: center;
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
        items: []
      }
    },
    components: {xHeader}
  }
</script>
