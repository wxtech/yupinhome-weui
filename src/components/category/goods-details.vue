<template>
  <section class="goods-swiper">
    <div class="swiper-container swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="slider-bgs" src="~assets/category/box.jpg"/></div>
        <div class="swiper-slide">
          <img class="slider-bgs" src="~assets/category/box.jpg"/></div>
        <div class="swiper-slide">
          <img class="slider-bgs" src="~assets/category/box.jpg"/></div>
      </div>
      <div class="swiper-pagination"><span class="swiper-pagination-switch"></span><span
        class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span><span
        class="swiper-pagination-switch"></span></div>
    </div>
  </section>
  <section class="goods-info">
    <div class="item-line">
      <div class="item-top">
        <h2>Redfyre Elan110一体式灶具</h2>
        <span><i class="share-icon"><img src="~assets/category/sharebtn-82x82.png"/></i>
          <i class="fa fa-star-o" aria-hidden="true"></i></span>
      </div>
      <div class="item-price">
        <span class="red fl"><ins></ins>20000.0</span>
        <span><em class="num">1</em>人评价</span><span>好评率<em class="nice">100%</em></span>
      </div>
    </div>
    <div class="item-line">
      <span class="part-note-msg">数量</span>
      <div class="quantity-wrapper num-wrapper">
        <a class="quantity-decrease J_ping">
          <em id="minus">-</em>
        </a>
        <input type="tel" class="quantity" size="4" value="1" id="number" onblur="modify();">
        <a class="quantity-increase J_ping"><em id="plus">+</em></a>
      </div>
    </div>
  </section>
  <section class="goods-tabBar">
    <div class="myvux-swiper">
      <ul class="nav nav-tabs parentnav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#pphome" aria-controls="pphome" role="tab" data-toggle="tab">商品介绍</a>
        </li>
        <li role="presentation">
          <a href="#ppprofile" aria-controls="ppprofile" role="tab" data-toggle="tab">规格参数</a>
        </li>
        <li role="presentation">
          <a href="#ppprofile2" aria-controls="ppprofile2" role="tab" data-toggle="tab">售后保障</a>
        </li>
      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="pphome">
          <section>
            <img src="~assets/category/goodsinfo-1242x4600.jpg"/>
          </section>
        </div>
        <div role="tabpanel" class="tab-pane" id="ppprofile">
          ddd
        </div>
        <div role="tabpanel" class="tab-pane" id="ppprofile2">
          ccc wuwuwuwwu
        </div>
      </div>
    </div>
  </section>
  <section class="commendetail">
    <div class="commendetailModel">
      <div class="goodseval">
        <div class="info">
          <a>
            <span class="goods-eval">评价</span>
            <span class="good-comment-text red">好评率<em id="goods">99%</em></span>
          </a>
          <div class="lr"><i class="evaluation">1</i>人评价</div>
        </div>
      </div>
      <div class="prod-comment">
        <div class="comment-list" id="comment-listID">
          <div class="comment-list-item">
            <div class="comment-item-info"><span class="comment-item-author">张晓飞</span>
              <span class="product-item-star"><span class="real-star comment-stars-width5"></span></span>
            </div>
            <div class="comment-item-content down-icon"><span class="s-content">到的时候还冻得！不错</span></div>
            <div class="comment-img-container">
              <ul class="img-container J_ping">
                <li class="comment-img-item">
                  <img src="~assets/category/commit-tmb-254x254.jpg"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="s-actionBar-container">
    <div class="s-actionbar mui-flex action-bar">
      <div class="support cell">
        <div class="weui_tabbar_icon">
          <img slot="icon"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUYyQkNGRjE3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUYyQkNGRjI3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjJCQ0ZFRjdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjJCQ0ZGMDdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnNq1yQAAAbGSURBVHja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">
        </div>
        <p slot="label">联系客服</p>
      </div>
      <div class="toshop cell">
        <div class="weui_tabbar_icon">
          <img slot="icon"
               src="~assets/category/bottombar-icon06-80x80.png">
        </div>
        <p slot="label">预约看货</p>
      </div>
      <div class="addfav cell j-mdv">
        <div class="weui_tabbar_icon">
          <img slot="icon"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUYyQkNGRjU3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUYyQkNGRjY3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjJCQ0ZGMzdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjJCQ0ZGNDdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrkuO5UAAAPhSURBVHja7JxriExhGMffsUOKTBYbJdoil2xEbu1i7Acll1yWkv1AKSlpE/JFCZ9IlA8un7ZYtViXTb6wY0xL69aKbeWSfFkJ697GWDOep/eZvHvMzgx257wz5/+vf3POed9mTr953vPejy8ejyvo39UHCAAQAAEQACEAdEn+dBnGVZ71LJwnp1YhAm0qwhfJ8RS+DoCpNS1NepAcwDOwe80iT0hyfRL5ECqR9GoTO/UNz0AIAAEQAAEQAkC7mzGZqJr8Iwc5fCfvJT91G+CyHA6mD+QtNkRg1DifSC4jvyefc+QtJ48hPyeHHGkV5EJyI7nVuN6PvE6O68mvjbTh5KVyfMLxfVPIM9Lch9+GIlxF/mScbxKA3IPZ6MhbIzd+J0nabAF4mnzUuB4wAB4QwAmVGQCd37dTAKa6D1QiqIUBEAAhAARAAARACAABEAABEAJAAATAfJffw4FTovR6npkAmLl41LqOPI88xJH2EQC7arxEWLmYNYy8wsjTTg4rPaVQ7XWARcbxK/KIJHl44iii9FpGBveIHPNqER5FXk+eLx5ppCXgfRZgYfED8k+vViIMaKFxXpMkz1elJ5oSwO71NLBcAziHPFWeZclmzjrItwQWF0ue4ev0ajOmSIoiwyqWa2sceXgxZ5MAaxBgUa+3A0vJLUpPwvscaVGBFJIIa1KWrYjNJsDB5LlGlJXI9dFGHi5+dwVYWIpnh1d7IoPIY+WYF6e/JRc48vAD/r7RrGiUisCzXbkFSm+HCMqn3/E73OZqNmrJiDQ10BcWnXGcx6SxmqglI9KYxWBCN+IdS61GkbxBfofRmMzFbbUXXhqd6OnxwHblMWFAFQABEAABELKmGVOl8mP7603VdQF7rwI0h5N250lgcW+pMFsAeZic914U51HJvJrNIswRmO79ID7p5qES+QsNJB9RendQTCLVhq1gleTH8oe+Ie8n97cNIEf2NfJmpQdSWZPJ59XvnUZuiCu5k0rPGbN4nng7+ZL6czTcVYBrlV4ywf/yPvJKpYfm+SZ5i1ZfF+AF5F5YPFrEE+yH5ZzHMZfY0IxJKCifl8m75Pgh+Rl5qNKvSmnOMsDp5AFKTxssV3pP3wWlX+fC5uUe9bZEYDzNb7lRoZi/aZaAgv+5p94C2CCfi8kHpUjXyjXeotriAkB+hHyRUsevseIp02MSmayQTUWYYW2QorzVuB6TB3mnCwAZ3jbycaWnUkuNNK5ErtgUgQxokVQYbdJWvC0RWetiLcwbsSukScWvJnhJ3kNebUtf2BTP5+4Q26Q6MUZjbJAPL+JGBAIgAAIgBIAAmJv6JcAAsL/HdP6wykcAAAAASUVORK5CYII=">
        </div>
        <p>购物车</p>
      </div>
      <button class="cart cell btn2" style="">加入购物车</button>
      <button class="buy cell btn2" style="">立即购买</button>
    </div>
  </section>
</template>
<style>
  @import "~assets/font-awesome/css/font-awesome.min.css";

  #app {
    background: #f5f5f5;
  }

  .goods-info {
    border-bottom: 1px solid #cccccc;
  }

  .goods-tabBar .myvux-swiper {
    border-top: 1px solid #cccccc;
  }

  .goods-tabBar .myvux-swiper .parentnav-tabs li {
    width: 33.3%;
  }

  .goods-tabBar .tab-content {
    background: none;
  }

  .goods-tabBar .myvux-swiper .nav-tabs > li > a {
    color: #989898 !important;
    border-right: 1px solid #cccccc;
  }

  .goods-tabBar .nav-tabs > li > a {
    border-radius: 0;
    border: none;
  }

  .goods-tabBar .nav-tabs > li:last-child > a {
    border-right: none;
  }

  .goods-tabBar .nav-tabs > li:first-child > a {
    border-left: none;
  }

  .goods-tabBar .nav-tabs > li {
    margin-bottom: 0;
  }

  #app .goodsBar {
    background: #fff;
    padding-bottom: 20px;
    margin-bottom: 0;
  }

  .prod-comment {
    margin-bottom: 100px;
  }

  .comment-img-container {
    margin: 9px 0 1px 0;
    overflow: hidden;
    font-size: 0;
  }

  .comment-img-container .img-container {
    overflow: hidden;
  }

  .img-container .comment-img-item {
    display: inline-block;
    width: 88.75px;
    height: 88.75px;
    overflow: hidden;
    border-radius: 4px;
  }

  .comment-item-author {
    color: #265baa;
  }

  .product-item-star {
    display: inline-block;
    overflow: hidden;
    width: 75px;
    height: 14px;
    margin-top: 10px;
    margin-left: 20px;
    background: url("~assets/category/Favouritebt.png") repeat-x 0 0;
    background-size: 15px 30px;
  }

  .comment-item-content {
    line-height: 30px;
  }

  .comment-stars-width5 {
    width: 100%;
  }

  .product-item-star .real-star {
    display: inline-block;
    height: 22px;
    background: url("~assets/category/Favouritebt.png") repeat-x 0 0;
    background-size: 15px 30px;
  }

  .comment-list {
    padding: 20px;
  }

  .goods-eval {
    color: #000000;
    font-size: 15px;
    margin-right: 30px;
  }

  .lr {
    float: right;
    color: #6f6f6f;
  }

  i, em, a, strong, span {
    font-style: normal;
  }

  .commendetailModel {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;

  }

  .goodseval {
    border-bottom: 1px solid #e1e1e1;
    padding: 0 20px;
  }

  .goodseval .info {
    position: relative;
    padding-top: 15px;
    padding-bottom: 14px;
    line-height: 13px;
  }

  #s-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: .13rem;
  }

  .goods-tabBar {
    border-top: 1px solid rgba(0, 0, 0, .1);
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin-top: 10px;
    overflow: hidden;
  }

  #s-header a {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    flex-basis: auto;
    display: block;
    flex-basis: 1px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    display: -ms-flexbox;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    -webkit-box-orient: vertical;
    -ms-flex-orient: vertical;
    height: 3em;
    color: #989898;
    border-top: 2px solid transparent;
    position: relative;
    font-size: 15px;
    background: #f5f5f5;
  }

  #s-header a.cur {
    background: #ffffff;
    color: #265baa;
  }

  #s-header a::after {
    content: '\20';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-right: 1px solid #e5e5e5;
  }

  .item-top .share-icon {
    width: 20%;
    vertical-align: top;
    line-height: 26px;
  }

  .part-note-msg {
    display: inline-block;
    line-height: 15px;
    font-size: 13px;
    color: #81838e;
    width: 26px;
    white-space: normal;
    height: auto;
    float: left;
    padding-top: 20px;
    margin-right: 25px;
    color: #000000;
  }

  .quantity-wrapper {
    display: inline-block;
    height: 30px;
    border-radius: 5px;
    margin-left: 8px;
    float: left;
    padding: 20px 0;
  }

  .num-wrapper {
    height: auto;
  }

  .quantity-decrease, .quantity-increase {
    background: #ebebeb;
    border: 1px solid #cbcbcb;
    color: #232326;
    display: block;
    line-height: 24px;
    width: 30px;
    overflow: hidden;
    text-indent: -200px;
  }

  .quantity-decrease em {
    background: url("~assets/category/cart-number-new.png") no-repeat;
    background-size: 25px 25px;
    background-position: 0 -15px;
    height: 12px;
    width: 12px;
    display: block;
    margin: 6px;
    margin-left: 8px;
  }

  .num-wrapper .quantity-decrease em {
    height: 16px;
  }

  .num-wrapper .quantity {
    height: 30px;
  }

  .quantity {
    color: #232326;
    border: solid #cbcbcb;
    border-width: 1px 0 1px 0;
    height: 24px;
    width: 34px;
    border-radius: 0;
    -webkit-appearance: none;
  }

  .quantity-decrease, .quantity, .quantity-increase {
    float: left;
    font-size: 15px;
    text-align: center;
    height: 100%;
  }

  .quantity-increase {
    -webkit-border-radius: 0 2px 2px 0;
  }

  .quantity-increase em {
    background: url("~assets/category/cart-number-new.png") no-repeat 0 0;
    background-size: 25px 25px;
    height: 12px;
    width: 12px;
    display: block;
    margin: 6px;
    margin-top: 10px;
    margin-left: 8px;
  }

  .item-top {
    line-height: 35px;
  }

  .item-price {
    text-align: right;
  }

  .item-price span {
    color: #6f6f6f;
    font-size: 12px;
  }

  .item-price span em {
    font-style: normal;
  }

  .item-price span:nth-child(2) {
    margin-right: 10px;
  }

  .item-price span.fl {
    float: left;
    color: #e40000;
  }

  .item-top h2 {
    display: inline;
    color: #275bab;
    font-weight: normal;
    font-size: 15px;
  }

  .item-top span {
    float: right;
    text-align: right;
  }

  .item-top span > i {
    font-size: 18px;
    color: #275bab;
  }

  .item-top span i:nth-child(1) {
    margin-right: 5px;
  }

  .item-line {
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding: 0 20px;
    padding-bottom: 8px;
    overflow: hidden;
  }

  .s-actionBar-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }

  .mui-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .action-bar {
    color: #999;
    border-top: 1px solid #E5E5E5;
  }

  .action-bar .cell {
    color: #265baa;
  }

  .action-bar .btn2 {
    color: #ffffff;
  }

  .goods-tabBar .nav-tabs > li.active > a, .goods-tabBar .nav-tabs > li.active > a:hover, .goods-tabBar .nav-tabs > li.active > a:focus {
    border: none;
    border-right: 1px solid #cccccc;
  }

  .mui-flex > .cell {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
    padding: 0 !important;
    position: relative;
  }

  .action-bar .cell {
    height: 55px;
    text-align: center;
    border: none;
  }

  .action-bar .support {
    max-width: 65px;
    border-right: 1px solid rgba(0, 0, 0, .05);
    min-width: 26px;
  }

  .action-bar .toshop {
    max-width: 65px;
    min-width: 26px;
    border-right: 1px solid rgba(0, 0, 0, .05);
  }

  .action-bar .addfav {
    max-width: 65px;
    border-right: 1px solid rgba(0, 0, 0, .05);
    min-width: 26px;
  }

  .action-bar .cart {
    background: #FF9500;
  }

  .action-bar .buy {
    background: #DD2727;
  }

  .goods-swiper {
    height: 280px;
    overflow: hidden;
  }

  .goods-swiper .swiper-pagination {
    bottom: -1px;
  }
</style>
<script>
  import $ from '../../assets/swiper/dist/jquery-1.10.1.min'
  import Swiper from '../../assets/swiper/dist/idangerous.swiper.min'
  window.jQuery = require('jquery')
  export default{
    data(){
      return {
        parentTab: ['保修', '退换货'],
        index: 1
      }
    },
    components: {
      $,
      Swiper
    },
    ready(){
      require('bootstrap')
      let cssClassNames = ['flipInY', 'bounceInLeft', 'bounceInUp', 'bounceInRight', 'bounceInDown', 'flipInX', 'rotateInDownRight', 'rotateInDownLeft', 'rotateInUpLeft', 'rotateInUpRight', 'hinge', 'bounce', 'swing', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'fadeIn', 'fadeInDownBig', 'flip', 'lightSpeedIn', 'rotateIn', 'slideInUp', 'zoomIn', 'rollIn'];
      let swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: '.swiper-pagination',
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // And if we need scrollbar
        scrollbar: '.swiper-scrollbar',
        autoplay: 6000,
        speed: 2000,
        onSlideChangeStart: function () {
          $(swiper.container).find('.titles-bgs,a').removeClass(cssClassNames.join(' ')).hide();
        },
        onSlideChangeEnd: function () {
          $(swiper.container).find('.swiper-slide-active .titles-bgs,.swiper-slide-active a').each(function () {
            $(this).show()
            $(this).addClass(cssClassNames[Math.floor(cssClassNames.length * Math.random())]);
          });
        }
      });
    }
  }
</script>
