<template>
  <x-header :left-options="{backText: '返回',showBack:true}">最近联系人</x-header>
  <div class="mycustomer-main">
    <div class="messages">
      <div class="items">
        <img src="~assets/home/person.jpg" alt="">
        <span class="message-desc">
            <b>客服001 <i class="r">20小时前</i></b><br>
            <span class="p">您的商品已经帮您预约到下周二了您的商品已经帮您预约到下周二了您的商品已经帮您预约到下周二了，请记得去噢！</span>
          </span>
      </div>
      <div class="items">
        <img src="~assets/home/person.jpg" alt="">
        <span class="message-desc">
            <b>客服001 <i class="r">20小时前</i></b><br>
            <span class="p">您的商品已经帮您预约到下周二了您的商品已经帮您预约到下周二了您的商品已经帮您预约到下周二了，请记得去噢！</span>
          </span>
      </div>
    </div>
  </div>
  <div class="noMore">没有更多消息了</div>

  <div class="text-center text-center-logo text-center-logo2">
    <img src="~assets/logo.png">
  </div>

</template>
<style>
  .messages * {
    vertical-align: middle;
  }

  .messages .items {
    padding: 8px 10px;
    border-bottom: #e1e1e1 solid 1px;
  }

  .messages b {
    color: #000;
    font-weight: normal;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 50%;
    text-overflow: ellipsis;
  }

  .messages i {
    color: #a0a0a0;
    font-size: 10px;
  }

  .messages .p {
    padding-top: 10px;
    color: #6f6f6f;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
  }

  .message-desc {
    position: relative;
    width: 78%;
  }

  .message-desc i {
    position: absolute;
    right: 0;
    top: 0;
  }

  .messages img {
    max-width: 20%;
  }

  .messages b {
    overflow: hidden;
  }

</style>
<script>
  import xHeader from 'vux/src/components/x-header'

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
