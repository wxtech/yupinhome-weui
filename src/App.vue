<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
  img {
    max-height: 100%;
    max-width: 100%;
  }

  input, button, select, a {
    outline: none;
  }

  body {
    font-size: 12px;
    font-family: normal;
  }

  i, em, a, strong, span, label, b {
    display: inline-block;
  }

  .ad img {
    width: 100%;
  }

  .ad {
    margin-bottom: 50px;
  }

  * {
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  .button {
    background: #275bab;
    border-radius: 4px;
    line-height: 44px;
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 16px;
  }

  .button-1 {
    border: 1px solid #275bab;
    border-radius: 4px;
    line-height: 38px;
    color: #275bab;
    width: 100%;
    text-align: center;
    font-size: 16px;
    background: #fff;
  }

  .mar-btn {
    margin: 20px 0;
    width: 100%;
  }

  p {
    color: #888;
    line-height: 1.5;
  }

  img {
    width: 100%;
  }

  .bg {
    background: #fff;
  }

  .clear:after {
    content: '';
    display: block;
    clear: both;
  }

  .col {
    color: #275bab;
  }

  .col-1 {
    color: #e82424;
  }

  .col-2 {
    color: #b1b1b1;
  }

  .box {
    display: -webkit-box;
    -webkit-box-align: center;
  }

  .l, .ll {
    float: left;
  }

  .r, .rr {
    float: right;
  }

  .pad {
    padding: 12px 4%;
  }

  .noMore {
    text-align: center;
    margin: 12px 0;
    color: #888;
  }

  .vux-header {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  }

  .repair-search {
    padding: 10px;
    background: #fff;
  }

  .vux-header {
    position: fixed !important;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }

  .vux-header + * {
    margin-top:50px;
  }

  .nomoretext {
    color:#aaa;
    font-size:12px;
  }
  .weui_tabbar_item {
    padding:5px 0 5px!important;
  }
  .weui_tabbar_label {
    color:#345ca5!important;
    margin-top:-2px!important;
  }
  .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label
  {
    color:black!important;
  }
  .infoicon {
    width:20%;
    margin:0 auto;
  }
  .infoicon img{
    width:100%;
    display:block;
  }
  .vux-header-back {
    text-indent: -9999px;
  }

</style>
<style lang="less">
  @import '~vux/src/styles/reset';
</style>
