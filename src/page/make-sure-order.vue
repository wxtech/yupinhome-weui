<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2 navbar3">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <section class="goods-tabBar contact-tabBar makesurewrap">
    <div class="myvux-swiper">
      <ul class="nav nav-tabs parentnav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#pphome" aria-controls="pphome" role="tab" data-toggle="tab" aria-expanded="false">全额支付</a>
        </li>
        <li role="presentation">
          <a href="#ppprofile" aria-controls="ppprofile" role="tab" data-toggle="tab" aria-expanded="true">预付定金</a>
        </li>

      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="pphome">
          <div class="weui_cell vux-tap-active">
            <div class="weui_cell_hd"><span class="black">送至</span></div>
            <div class="weui_cell_bd weui_cell_primary">
              <a href="javascript:;" class="address-cir">
                 <span class="address-icon">
                 默认
              </span>
              </a>
              <p>上海市闵行区万源路212号324室</p> <span class="vux-label-desc">
              <span>张某某</span><span>1323224124</span>
            </span></div>
            <div class="weui_cell_ft with_arrow"></div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="ppprofile">
          <div class="reserve">
            <div class="reserve-title">
              预付金额<span class="red"><ins></ins>3000.00</span>
            </div>
            <p class="reserve-box">
              提示：您选择了预付定金的方式来购买商品，您需要在收货之后马上支付剩余的款项￥20000.00。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="make-sure-container">
    <ul class="cart-item make-sure-item">
      <li>
        <div class="cart-box">
          <div class="cart-right">
            <div class="cart-img">
              <img
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZBRkI1MjdEN0NGNDExRTY5NzY2QTJBMEM5RDAwMDYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZBRkI1MjdFN0NGNDExRTY5NzY2QTJBMEM5RDAwMDYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkFGQjUyN0I3Q0Y0MTFFNjk3NjZBMkEwQzlEMDAwNjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkFGQjUyN0M3Q0Y0MTFFNjk3NjZBMkEwQzlEMDAwNjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQD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">
            </div>
            <div class="pro-box">
              <div class="title-line ">
                <div class="title">
                  <h4 class="item-name">多功能烤箱 GEKD 40000B</h4>
                </div>
                <span class="distance"></span>
                <span class="store"><ins></ins>23321.00</span>
              </div>
              <div>
                商品编号：231232
              </div>
              <div class="quantity-wrapper num-wrapper shopcart-wrapper">
                <a class="quantity-decrease J_ping">
                  <em id="minus">-</em>
                </a>
                <input type="tel" class="quantity" size="4" value="1" id="number">
                <a class="quantity-increase J_ping"><em id="plus">+</em></a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="cart-box">
          <div class="cart-right">
            <div class="make-sure-order-line">
              <span class="black lh">配送方式</span>
              <p class="fr">某某流</p>
            </div>
            <div class="pro-box pro-send">
              <p class="order-send">送货时间：<span>2016-9-14</span><span>周六</span><span>9:00-15:00</span></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <section class="make-sure-container bt">
    <div class="bz">
      <div class="b1">备注</div>
      <div class="b2"><textarea></textarea></div>
    </div>
  </section>
  <section class="make-sure-container">
    <div class="weui_cell vux-tap-active">
      <div class="weui_cell_hd"><span class="black">促销优惠</span></div>
      <div class="weui_cell_bd weui_cell_primary">
        <p class="txt-fr">优惠券满20000减1000</p></div>
      <div class="weui_cell_ft with_arrow"></div>
    </div>
    <div class="weui_cell vux-tap-active">
      <div class="weui_cell_hd"><span class="black">发票信息</span></div>
      <div class="weui_cell_bd weui_cell_primary">
        <p class="txt-fr">个人</p></div>
      <div class="weui_cell_ft with_arrow"></div>
    </div>
    <div class="weui_cell vux-tap-active">
      <div class="weui_cell_hd"><span class="black">可用积分</span></div>
      <div class="weui_cell_bd weui_cell_primary">
        <p class="txt-fr">1231积分可抵扣123元</p></div>
      <div class="weui_cell_ft with_arrow"></div>
    </div>
  </section>
  <section class="make-sure-container">
    <div class="total-line">
      <div class="total-box"><span>总计：</span>
        <span class="red"><ins></ins>
        23321.00</span>
      </div>
      <ul class="total-ul">
        <li><a href="javascript:;">
          <img src="~assets/order/payment-icon01-414x195.jpg"/>
          <i class="icon active"><img src="~assets/order/payment-seclected-72x72.jpg"/></i>
        </a></li>
        <li><a href="javascript:;">
          <img src="~assets/order/payment-icon02-414x195.jpg"/>
          <i class="icon"><img src="~assets/order/payment-seclected-72x72.jpg"/></i>
        </a></li>
        <li><a href="javascript:;">
          <img src="~assets/order/payment-icon03-414x195.jpg"/>
          <i class="icon"><img src="~assets/order/payment-seclected-72x72.jpg"/></i>
        </a></li>
        <li><a href="javascript:;">
          <img src="~assets/order/payment-icon04-414x195.jpg"/>
          <i class="icon"><img src="~assets/order/payment-seclected-72x72.jpg"/></i>
        </a></li>
        <li><a href="javascript:;">
          <img src="~assets/order/payment-icon05-414x195.jpg"/>
          <i class="icon"><img src="~assets/order/payment-seclected-72x72.jpg"/></i>
        </a></li>
      </ul>
    </div>
  </section>
  <section class="bgf5">
    <div class="contact-btn">
      <button>提交</button>
    </div>
  </section>
</template>
<style>
  .reserve {
    padding: 10px 15px;
  }

  .reserve-title {
    color: #000000;
    padding-bottom: 5px;
  }

  .reserve-box {
    background: #ffcccc;
    border: 1px solid #ff0000;
    color: #e40000;
    font-size: 12px;
    padding: 10px;
  }

  .reserve-title span {
    float: right;
  }

  .bgf5 {
    background: #f5f5f5;
  }

  .total-ul, .total-ul a {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .total-ul {
    border-top: 1px solid #999999;
  }

  .total-ul a {
    display: block;
    border-right: 1px solid #999999;
    border-bottom: 1px solid #999999;
    box-sizing: border-box;
    display: -webkit-box;
  }

  .total-ul a:nth-child(3) {
    border-right: none;
  }

  .total-ul .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -12px;
    right: 0px;
    display: none;
  }

  .total-ul .active {
    display: block;
  }

  .total-ul li {
    width: 33.3%;
    float: left;
  }

  .total-line {
    text-align: center;
    line-height: 40px;
  }

  .txt-fr {
    text-align: right;
  }

  .bz {
    padding: 12px 15px 10px 15px;
    width: 100%;
    overflow: hidden;
  }

  .bt {
    border-bottom: 1px solid #999999;
  }

  .b1 {
    width: 20%;
    float: left;
    width: 20%;
    display: inline-block;
    line-height: 12px;
  }

  .b2 {
    float: right;
    width: 80%;

  }

  .b2 textarea {
    width: 100%;
    height: 85px;
    resize: none;
  }

  textarea {
    border: 1px solid #999999;
  }

  .make-sure-order-line {

    overflow: hidden;
  }

  .lh {
    /*line-height: 42px;*/
    float: left;
    position: absolute;
    top: 10px;
  }

  .fr {
    float: right;
  }

  .order-send span {
    color: #000000;
    padding-left: 10px;
  }

  .make-sure-container {
    margin-top: 10px;
    border-top: 1px solid #e1e1e1;
  }

  .pro-send {
    float: right;
    text-align: right;
    padding-top: 10px;
  }

  .make-sure-item li {
    padding: 10px 15px;
  }

  .make-sure-item .title-line {
    line-height: 18px;
    height: 18px;
    margin-top: 11px;
    overflow: hidden;
  }

  .make-sure-item .title-line .title {
    float: left;
    max-width: 100%;
    line-height: 18px;
    height: 18px;
    font-size: 0;
  }

  .make-sure-item .title-line .store {
    float: right;
    color: #dc0000;
    font-weight: bold;
    font-size: 12px;
    -webkit-transform: scale(.91666667);
    -moz-transform: scale(.91666667);
    -ms-transform: scale(.91666667);
    -o-transform: scale(.91666667);
    transform: scale(.91666667);
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  .make-sure-item .title-line .title .item-name {
    display: inline-block;
    max-width: 100%;
    font-size: 15px;
    color: #275bab;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .make-sure-item .cart-right {
    width: 100%;
    position: relative;
  }

  .make-sure-item .cart-right .cart-img {
    width: 28%;
    height: 100px;
  }

  .make-sure-item .shopcart-wrapper {
    padding-bottom: 0px;
  }

  .make-sure-item b {
    float: right;
  }

  .pro-box h3 {
    overflow: hidden;
  }

  .black {
    color: #000000;
  }

  .address-cir {
    background: #265baa;
    padding: 5px;
    float: left;
    margin: 0px 10px;
  }

  .weui_cell_bd > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #6f6f6f;
  }

  .vux-label-desc {
    margin-top: 3px;
  }

  .vux-label-desc > span {
    color: #265baa;
  }

  .vux-label-desc > span:nth-child(1) {
    margin-right: 10px;
  }

  .address-icon {
    border-radius: 100%;
    border: 2px solid #fff;
    background: #6fa4d8;
    display: block;
    width: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
  }

  .makesurewrap {
    margin-top: 0px;
    border-top: none;

  }

  .makesurewrap:before {
    content: '';
    border-top: 1px solid #bebebe;
  }

  .makesurewrap .nav-tabs > li.active > a {
    color: #265baa !important;
  }

  .weui_cell_ft.with_arrow:after {
    content: " ";
    display: inline-block;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    height: 10px;
    width: 10px;
    border-width: 1px 1px 0 0;
    border-color: #265baa;
    border-style: solid;
    position: relative;
    top: -1px;
    margin-left: .3em;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import $ from '../assets/swiper/dist/jquery-1.10.1.min'
  import Swiper from '../assets/swiper/dist/idangerous.swiper.min'
  window.jQuery = require('jquery')
  export default{
    data(){
      return {
        headerTitle: '确认订单'
      }
    },
    components: {
      navBox
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
