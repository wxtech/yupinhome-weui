<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <section class="receipt-label">
    <label><input type="text" placeholder="请输入关键词"/>
      <a href="javascript:;">添加</a>
    </label>
  </section>
  <section class="make-sure-container receipt-wrap">
    <div class="weui_cell vux-tap-active">
      <div class="weui_cell_bd weui_cell_primary">
        <a href="javascript:;" class="address-cir">
               <span class="address-icon">
               默认
            </span>
        </a>
        <span class="vux-label-desc receipt-address">
             收货人：<span>张某某</span><span>1323224124</span>
          </span>
        <p>上海市闵行区万源路212号324室</p>
      </div>
      <div class="weui_cell_ft with_arrow"></div>
    </div>
    <div class="weui_cell vux-tap-active">
      <div class="weui_cell_bd weui_cell_primary">
        <a href="javascript:;" class="address-cir" style="visibility: hidden;">
               <span class="address-icon">
               默认
            </span>
        </a>
        <span class="vux-label-desc receipt-address">
            收货人：<span>张某某</span><span>1323224124</span>
          </span>
        <p>上海市闵行区万源路212号324室</p>
      </div>
      <div class="weui_cell_ft with_arrow"></div>
    </div>
  </section>
  <div class="view-all">
    没有更多的地址了
  </div>
  <user-footer></user-footer>
  <!--弹层-->
  <div class="weui_dialog_confirm layer_box">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <h4>添加收货地址
        <div class="weui_dialog_hd"><i class="fa fa-times" aria-hidden="true"></i></div>
      </h4>
      <div class="address-edit-box">
        <label>
          <span>收件人</span>
          <input type="text" placeholder="请填写真实姓名">
        </label>
        <label>
          <span>联系方式</span>
          <input type="text" placeholder="请输入手机号或电话号码">
        </label>
        <label>
          <span>选择城市</span>
          <input type="text" placeholder="请选择省市区">
        </label>
        <label>
          <span>详细地址</span>
          <input type="text" placeholder="请详细到门牌号">
        </label>
        <label>
          <span> <input type="checkbox" class="check_btn">设置为默认收货地址</span>
        </label>
        <label>
          <a href="javascript:;" class="save_btn">保存</a>
        </label>
      </div>
    </div>
  </div>
</template>
<style>
  .address-edit-box .save_btn {
    background: #345ca5;
    color: #ffffff;
    display: inline-block;
    width: 100%;
    padding: 0.4em 0;
  }

  .address-edit-box label > span {
    display: block;
    text-align: left;
    font-size: 12px;
  }

  .address-edit-box > label {
    padding-top: 10px;
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  .address-edit-box label > input {
    line-height: 20px;
    padding-left: 5px;
    border: 1px solid #999999;
    line-height: 28px;
    width: 100%;
    display: block;
  }

  .address-edit-box label input[type="checkbox"] {
    vertical-align: middle;
    margin-right: 10px;
  }

  #app .layer_box .weui_dialog .weui_dialog_hd {
    line-height: 36px;
  }

  #app .layer_box .weui_dialog .weui_dialog_hd {
    padding: 0 5%;
  }

  .weui_dialog h4 {
    line-height: 36px;
    color: #345ca5;
    border-bottom: 1px solid #e2e4e6;
  }

  .receipt-label {
    padding: 10px 15px 10px 15px;
    overflow: hidden;
  }

  .receipt-label > label {
    display: block;
  }

  .receipt-label > label > a {
    float: right;
    color: #265baa;
    line-height: 28px;
    margin-right: 40px;
  }

  .receipt-label > label > input {
    border: 1px solid #275bab;
    line-height: 28px;
    padding-left: 5px;
  }

  .receipt-wrap {
    margin-top: 0px;
  }

  .receipt-address {
    display: block;
  }

  .receipt-address span:nth-child(2) {
    float: right;
  }

  .view-all {
    font-size: 12px;
    color: #6f6f6f;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  export default{
    data(){
      return {
        headerTitle: '收货地址管理'
      }
    },
    components: {
      navBox,
      userFooter
    }
  }
</script>
