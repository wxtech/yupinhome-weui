<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2 navbarfull">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <section>
    <div class="service-center">
      <a class="service-header" href="javascript:;">
        <img src="~assets/home/final_02.jpg"/>
      </a>
      <div class="service-info">
        <h3>您的客服<b class="blue">爱丽丝</b>为您服务</h3>
        <p>请使用下面的表单资讯或拨打<b class="red">400-888-8888</b></p>
      </div>
    </div>
  </section>

  <section class="goods-tabBar contact-tabBar">
    <div class="myvux-swiper">
      <ul class="nav nav-tabs parentnav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#pphome" aria-controls="pphome" role="tab" data-toggle="tab">我要咨询</a>
        </li>
        <li role="presentation">
          <a href="#ppprofile" aria-controls="ppprofile" role="tab" data-toggle="tab">我要预约到店看货</a>
        </li>

      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="pphome">
          <div class="contact-wrap">
            <h3>请输入您要咨询的内容</h3>
            <textarea>dd</textarea>
            <div class="contact-btn">
              <button>提交</button>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="ppprofile">
          ddd
        </div>
      </div>
    </div>
  </section>

  <user-footer></user-footer>
</template>
<style>
  .myvux-swiper .nav-tabs > li.active > a {
    color:#275baa!important;

  }
  .contact-wrap {
    padding: 0px 20px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .contact-btn {
    text-align: center;
    width: 100%;
    padding: 20px 0px;
  }

  .contact-btn button {
    border: none;
    color: #ffffff;
    background: #265baa;
    width: 80%;
    line-height: 30px;
    font-size:18px;
    font-weight:lighter;
    padding: 6px 12px;
  }

  .contact-wrap h3 {
    line-height: 40px;
    font-size: 14px;
  }

  .contact-wrap textarea {
    display: block;
    width: 100%;
    height: 280px;
    border: 1px solid #999999;
  }

  .service-center {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
  }

  .service-center a {
    display: block;
    width: 20%;
  }

  .service-center a > img {
    display: block;
    width: 100%;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  .service-center a, .service-center .service-info {
    float: left;
  }

  .service-center .service-info {
    width: 80%;
    padding-left: 20px;
    line-height: 36px;
  }

  .service-center .service-info h3{
    color: #414a55;
    font-weight: normal;
    font-size: 15px;
  }
  .service-info p {
     color: #7a7a7a;
    font-weight: normal;
    font-size: 13px;

  }
  .service-info p > .redn {
    font-weight: bold;
  }

  .blue {
    color: #265baa;
  }

  .contact-tabBar .myvux-swiper .parentnav-tabs li {
    width: 50%;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  import $ from '../assets/swiper/dist/jquery-1.10.1.min'
  import Swiper from '../assets/swiper/dist/idangerous.swiper.min'
  window.jQuery = require('jquery')
  export default{
    data(){
      return {
        headerTitle: '客服中心'
      }
    },
    components: {
      $,
      Swiper,
      navBox,
      userFooter
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
