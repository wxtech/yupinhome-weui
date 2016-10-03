<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的收藏</x-header>
  <div class="right-top bg">
    <img src="~assets/home/right.png"/>
    <p>您是我们的VIP客户，您可以享有在购买标记VIP优惠的商品中获得额外的折扣。</p>
  </div>
  <ul class="box right-mid bg">
    <li>
      <span>积分</span><strong class="col-1">1432</strong>
    </li>
    <li>
      <span class="col">您拥有的积分</span>
      <p>即将过期的积分效期到2017年9月12日</p>
    </li>
    <li>
      <a href="###" class="button">立刻使用</a>
    </li>
  </ul>
  <div class="right-bot bg">
    <ul class="right-list-1">
      <li>待使用 <b class="col-1">1</b></li>
      <li>已过期 0</li>
      <li>已过期 0</li>
    </ul>
    <ul class="box right-list-2">
      <li>
        <a href="###"><img src="~assets/home/right-1.png"/></a>
      </li>
      <li>
        <div class="col title">50元优惠券</div>
        <p>您在本站购买了超过1000元的商品即可使用此优惠券抵扣50元</p>
        <div class="col">优惠券使用截至日期</div>
        <div class="col-1">2016-11-12</div>
        <div class="box-btn"><a href="###" class="button-1">立刻使用 </a></div>
      </li>
    </ul>
  </div>
  <div class="noMore">没有更多的收藏</div>
  <div class="mar-btn get"><a href="###" class="button">去领优惠券</a></div>
</template>
<style>
  @import "~assets/commen.css";

  body {
    background: none;
  }

  .right-top {
    padding: 10px 4%;
    margin-top: 12px;
  }

  .right-top img {
    width: 100%;
    margin-bottom: 6px;
  }

  .right-mid {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 12px 0;
    margin: 10px 0;
  }

  .right-mid li {
    width: 33.33%;
    text-align: center;
  }

  .right-mid li:first-child span {
    /*background: url("~assets/usercenter/jifeng-icon-80x80.png");*/
  }

  .right-mid li:first-child strong {
    font-size: 18px;
  }

  .right-mid li:nth-child(2) {
    text-align: left;
  }

  .right-mid li:nth-child(2) span {
    font-size: 15px;
    margin-bottom: 5px;
  }

  .right-mid li:nth-child(3) {
    padding: 0 12px;
  }

  .get {
    padding: 0 25%;
  }

  .right-list-1 {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    line-height: 40px;
    text-align: center;
  }

  .right-list-1 li {
    float: left;
    width: 33.33%;
    border-right: 1px solid #ddd;
    color: #888;
  }
  .right-list-1 li:first-child {
    color: #275bab;
  }

  .right-list-1 li:last-child {
    border: none;
  }

  .right-list-2 {
    padding: 12px 0;
  }

  .right-list-2 li {
    width: 50%;
    padding: 0 10px;
  }
  .right-list-2 p{
    margin-bottom: 5px;
  }
  .right-list-2 .title {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .box-btn{
    margin: 10px 10px 10px 0;
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  export default{
    data(){
      return {
        items: []
      }
    },
    components: {xHeader}
  }
</script>
