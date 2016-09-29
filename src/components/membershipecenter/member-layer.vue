<template>
  <div class="weui_dialog_confirm">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <div class="weui_dialog_hd"><i class="fa fa-times" aria-hidden="true"></i></div>
      <div class="weui_dialog_bd clear">
        <img class="img" src="~assets/usercenter/sao.jpg">
      </div>
      <p class="layerP black1">将本站分享给朋友</p>
      <p class="layerP">一旦有人通过此二维码注册为本站会员，您将获得1000积分奖励</p>
      <div class="weui_dialog_ft">
        <a href="#" class="weui_btn_dialog"><i class="fa fa-weixin" aria-hidden="true"></i></a>
        <a href="#" class="weui_btn_dialog"><i class="fa fa-qq" aria-hidden="true"></i></a>
        <a href="#" class="weui_btn_dialog"><i class="fa fa-weibo" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</template>
<style>
  .layer_box .weui_mask {
    background: rgba(255, 255, 255, 0.6);
  }

  .layerP {
    margin: 0 15%;
    color: #787878;
    line-height: 21px;
  }

  .black1 {
    padding: 3% 0;
    color: #000000;
    font-size: 20px;
  }

  .clear {
    clear: both;
  }

  .layer_box .weui_dialog_ft a {
    border-radius: 50%;
    margin: 0 10%;

  }

  .layer_box .weui_dialog_ft a > i {
    color: #ffffff;
    font-size: 23px;
    vertical-align: middle;
  }

  .layer_box .weui_dialog_ft a:nth-child(1) {
    background: #8dc81b;
  }

  .layer_box .weui_dialog_ft a:nth-child(2) {
    background: #68a5e1;
  }

  .layer_box .weui_dialog_ft a:nth-child(3) {
    background: #f56467;
  }

  .layer_box .weui_dialog {
    border-radius: 0px;
    border: 1px solid #265baa;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.12);
    padding-bottom: 5%;
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
    text-align: center;
  }

  .layer_box .weui_dialog_ft:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: none;
    color: #D5D5D6;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  #app .layer_box .weui_dialog_ft a:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    border-left: none;
    color: #D5D5D6;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
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
