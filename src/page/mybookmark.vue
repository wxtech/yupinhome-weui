<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的收藏</x-header>
  <div class="repair-search">
    <input class="form-control" placeholder="请输入关键词">
  </div>
  <ul class="product-list">
    <li>
      <a>
        <img src="~assets/category/sub-cat-img01-438x326.jpg"/>
        <div>多功能冰箱</div>
        <p>￥1200.00</p>
      </a>
    </li>
    <li>
      <a>
        <img src="~assets/category/sub-cat-img01-438x326.jpg"/>
        <div>多功能冰箱</div>
        <p>￥1200.00</p>
      </a>
    </li>
    <li>
      <a>
        <img src="~assets/category/sub-cat-img01-438x326.jpg"/>
        <div>多功能冰箱</div>
        <p>￥1200.00</p>
      </a>
    </li>
    <li>
      <a>
        <img src="~assets/category/sub-cat-img01-438x326.jpg"/>
        <div>多功能冰箱</div>
        <p>￥1200.00</p>
      </a>
    </li>
    <li>
      <a>
        <img src="~assets/category/sub-cat-img01-438x326.jpg"/>
        <div>多功能冰箱</div>
        <p>￥1200.00</p>
      </a>
    </li>
    <li>
      <a>
        <img src="~assets/category/sub-cat-img01-438x326.jpg"/>
        <div>多功能冰箱</div>
        <p>￥1200.00</p>
      </a>
    </li>
  </ul>
  <div class="noMore">没有更多的收藏</div>
</template>
<style>
  .product-list {
    text-align: center;
    overflow: hidden;
    padding: 0 3%;
  }

  .product-list li {
    padding: 10px 0;
    float: left;
    width: 48%;
    margin-right: 4%;
    margin-top: 10px;
    background: #fff;
    list-style: none;
  }

  .product-list li:nth-child(2n) {
    margin-right: 0;
  }

  .product-list li a {
    display: block;
  }

  .product-list li img {
    width: 80%;
  }

  .product-list li div {
    color: #275bab;
    line-height: 30px;
  }

  .product-list li p {
    color: #e40000;
    margin-bottom: 0;
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
