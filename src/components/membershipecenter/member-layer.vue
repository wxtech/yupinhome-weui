<template>
  <div class="weui_dialog_confirm">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <a class="weui_dialog_hd closebtn"><img src="~assets/usercenter/close-icon-122x122.png"／></a>
      <div class="weui_dialog_bd clear">
        <img class="img" src="~assets/usercenter/sao.jpg">
      </div>
      <p class="layerP black1">{{shareTitle}}</p>
      <p class="layerP" v-if="hasText">一旦有人通过此二维码注册为本站会员，您将获得1000积分奖励</p>
      <div class="weui_dialog_ft sharebtnarea">
        <a href="#" class=" sharebtn"><img src="~assets/usercenter/sharebtn-icon01-100x100.jpg"／></a>
        <a href="#" class=" sharebtn"><img src="~assets/usercenter/sharebtn-icon02-100x100.jpg"／></a>
        <a href="#" class=" sharebtn"><img src="~assets/usercenter/sharebtn-icon03-100x100.jpg"／></a>
        <a href="#" class=" sharebtn"><img src="~assets/usercenter/sharebtn-icon04-100x100.jpg"／></a>
      </div>
    </div>
  </div>
</template>
<style>
  .layer_box .weui_mask {
    background: rgba(255, 255, 255, 0.6);
  }

  .layerP {
    margin: 0 14%;
    color: #787878;
    line-height: 21px;
    font-size: 14px;
  }

  .black1 {
    padding: 3% 0;
    color: #000000;
    font-size: 18px;
    margin-top:10px;
  }

  .clear {
    clear: both;
  }

  .layer_box .weui_dialog_ft a {
    border-radius: 50%;


  }

  .layer_box .weui_dialog_ft a > i {
    color: #ffffff;
    font-size: 23px;
    vertical-align: middle;
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
    width:254px;
    height: 254px;
    padding: 5%;
    vertical-align: middle;
    display: flex;
    justify-content: center;
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
  .closebtn {width:48px;height:48px;padding:0!important;}
  .closebtn img {width:100%;}
  .weui_dialog_ft a.sharebtn {width:50px;height: auto;margin: 0 15px;}
  .sharebtnarea {margin: 20px 5% 0;}
</style>
<script>
  import dialog from 'vux/src/components/dialog/index.vue'
  export default{
    props: {
      hasText: Boolean,
      shareTitle: String
    },
    components: {
      dialog
    }
  }
</script>
