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
  input,button,select,a{
    outline: none;
  }
  body {
    font-size: 12px;
    font-family: normal;
  }

  i, em, a, strong, span,label {
    display: inline-block;
  }

  .ad img {
    width: 100%;
  }

  .ad {
    margin-bottom: 50px;
  }

  *{
    box-sizing: border-box;
  }

  li{
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
    border:1px solid #275bab;
    border-radius: 4px;
    line-height: 38px;
    color: #275bab;
    width: 100%;
    text-align: center;
    font-size: 16px;
    background: #fff;
  }
  .mar-btn{
    margin: 20px 0;
    width: 100%;
  }
  p {
    color: #888;
    line-height: 1.5;
  }
  img{
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
  .col{
    color: #275bab;
  }
  .col-1{
    color: #e82424;
  }
  .col-2{
    color: #b1b1b1;
  }
  .box{
    display: -webkit-box;
    -webkit-box-align: center;
  }
  .l, .ll {
    float: left;
  }

  .r, .rr {
    float: right;
  }
  .pad{
    padding: 12px 4%;
  }
  .noMore {
    text-align: center;
    margin: 12px 0;
    color: #888;
  }
  .vux-header{
    box-shadow: 0 0 6px rgba(0,0,0,0.2);
  }
  .repair-search {
    padding: 10px;
    background: #fff;
  }
</style>
<style lang="less">
  @import '~vux/src/styles/reset';
</style>
