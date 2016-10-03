<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的收藏</x-header>
  <div class="repair-search">
    <input class="form-control" placeholder="请输入关键词">
  </div>
  <ul class="product-list">
    <li>
      <a>
        <div><img class="titles-bgs animated" src="~assets/home/slidertext01-266x45.png"/></div>
        <div>多功能烤箱</div>
        <div>￥1200.00</div>
      </a>
    </li>
  </ul>
</template>
<style>
  @import "~assets/bower_components/bootstrap/dist/css/bootstrap.css";
  .repair-search {
    padding: 10px 5px;
    background: -webkit-linear-gradient(top, #ededed, #fff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(top, #ededed, #fff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(top, #ededed, #fff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #ededed, #fff); /* 标准的语法 */
    border-top: #d9d9d9 solid 1px;
    border-bottom: #d9d9d9 solid 1px;
  }
  .product-list{
    margin-top: 12px;
  }
  .product-list li{
    float: left;

  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {xHeader}
  }
</script>
