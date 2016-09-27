<template>
  <div class="weui_dialog_confirm">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <div class="weui_dialog_hd"><i class="fa fa-times" aria-hidden="true"></i></div>
      <div class="weui_dialog_bd clear">
        <img class="img" mm-src="https://login.weixin.qq.com/qrcode/wfIPx0tMoA==" mm-src-load="qrcodeLoad"
             mm-src-parallel="" mm-src-timeout="10" mm-src-retry-count="2"
             src="https://login.weixin.qq.com/qrcode/wfIPx0tMoA==">
      </div>
      <p>将本站分享给朋友</p>
      <p>一旦有人通过此二维码注册为本站会员，您将获得1000积分奖励</p>
      <div class="weui_dialog_ft">
        <a href="#" class="weui_btn_dialog default">取消</a>
        <a href="#" class="weui_btn_dialog primary">确定</a>
      </div>
    </div>
  </div>
</template>
<style>
  .layer_box .weui_mask {
    background: rgba(255, 255, 255, 0.6);
  }

  .clear {
    clear: both;
  }

  .layer_box .weui_dialog {
    border-radius: 0px;
    border: 1px solid #265baa;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.12);
  }

  #app .layer_box .weui_dialog .weui_dialog_hd {
    padding: 0px;
    padding: 5%;
    display: inline-block;
    float: right;
    background: #265baa;
  }

  .fa-times {
    color: #FFFFFF;
  }

  #app .layer_box .weui_dialog .weui_dialog_bd {
    text-align: left;
    margin: 0 14%;
    border: 1px solid;
    height: 4rem;
    padding: 5%;
  }
</style>
<script>
  import dialog from 'vux/src/components/dialog/index.vue'
  export default{
    components: {
      dialog
    }
  }
</script>
