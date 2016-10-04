<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的售后</x-header>

  <div class="repair-search">
    <input class="form-control" placeholder="请输入关键词">
  </div>
  <div class="myvux-swiper">
    <ul class="nav nav-tabs parentnav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#pphome" aria-controls="pphome" role="tab"
                                                data-toggle="tab">保修</a></li>
      <li role="presentation"><a href="#ppprofile" aria-controls="ppprofile" role="tab" data-toggle="tab">退换</a></li>
    </ul>

    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="pphome">
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"
                                                    data-toggle="tab">全部</a>
          </li>
          <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">保修期内商品</a>
          </li>
          <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">已过保商品</a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="home">
            <div class="aftersales-itemdescription">
              <div class="l">
                <div class="sales-status">
                  状态：保修期内
                </div>
                <div class="sales-leftdays">
                  保修期还剩余：<span class="global-red">360</span>天
                </div>
              </div>
              <div class="r text-right">
                <button type="button" class="btn">
                  延保
                </button>
                <button type="button" class="btn" data-toggle="modal" data-target="#repaire-dialog">
                  返修
                </button>
              </div>
            </div>
            <div class="aftersales-items">
              <div class="l">
                <a>
                  <img src="~assets/home/final_02.jpg">
                </a>
              </div>
              <div class="r">
                <div class="desc">
                  <a>多功能烤箱 GEKD 40000B</a>
                  <div class="">购买日期：</div>
                  <div class="time">
                    2016-08-12
                    <span class="rr">
                  1x 件
                </span>
                  </div>
                </div>
              </div>
            </div>


            <div class="text-center">
              <br>
              没有更多保修商品了
              <br>
              <br>
            </div>


          </div>
          <div role="tabpanel" class="tab-pane" id="profile">保修期内商品保修期内商品</div>
          <div role="tabpanel" class="tab-pane" id="messages">已过保商品已过保商品</div>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane" id="ppprofile">
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#home2" aria-controls="home2" role="tab"
                                                    data-toggle="tab">全部</a>
          </li>
          <li role="presentation"><a href="#profile2" aria-controls="profile2" role="tab" data-toggle="tab">退货</a>
          </li>
          <li role="presentation"><a href="#messages2" aria-controls="messages2" role="tab" data-toggle="tab">换货</a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="home2">
            <div class="aftersales-itemdescription">
              <div class="l" style="width:70%">
                <div class="sales-status">
                  状态：申请退货中
                </div>
                <div class="sales-leftdays">
                  总价:<span class="global-red">￥23321.00</span> 申请退款:<span class="global-red">￥23321.00</span>
                </div>
              </div>
              <div class="r text-right" style="width:20%">
                <button type="button" class="btn">
                  联系客服
                </button>
              </div>
            </div>
            <div class="aftersales-items">
              <div class="l">
                <a>
                  <img src="~assets/home/final_02.jpg">
                </a>
              </div>
              <div class="r">
                <div class="desc">
                  <a>多功能烤箱 GEKD 40000B</a>
                  <div class="">购买日期：</div>
                  <div class="time">
                    2016-08-12
                    <span class="rr">
                  1x 件
                </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="aftersales-itemdescription">
              <div class="l" style="width:70%">
                <div class="sales-status">
                  状态：已退货
                </div>
                <div class="sales-leftdays">
                  总价:<span class="global-red">￥23321.00</span> 申请退款:<span class="global-red">￥23321.00</span>
                </div>
              </div>
              <div class="r text-right" style="width:20%">
                <button type="button" class="btn">
                  联系客服
                </button>
              </div>
            </div>
            <div class="aftersales-items">
              <div class="l">
                <a>
                  <img src="~assets/home/final_02.jpg">
                </a>
              </div>
              <div class="r">
                <div class="desc">
                  <a>多功能烤箱 GEKD 40000B</a>
                  <div class="">购买日期：</div>
                  <div class="time">
                    2016-08-12
                    <span class="rr">
                  1x 件
                </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <br>
              没有更多退换货商品了
              <br>
              <br>
            </div>

          </div>
          <div role="tabpanel" class="tab-pane" id="profile2">退货退货退货</div>
          <div role="tabpanel" class="tab-pane" id="messages2">换货换货换货</div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center text-center-logo text-center-logo2">
    <img src="~assets/logo.png">
  </div>
  <!-- Button trigger modal -->
  <div class="modal fade" id="repaire-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">申请返修</h4>
        </div>
        <div class="modal-body">
          <p>请说明您要返修的商品出现的问题，本站管理员将在2个工作日内与您取得联系并安排返修事宜：</p>
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import "~assets/bower_components/bootstrap/dist/css/bootstrap.css";

  .aftersales-items .l {
    width: 25%;
  }

  .aftersales-items .r {
    width: 75%;
  }

  .time {
    overflow: hidden;
    color: #6f6f6f;
  }

  .aftersales-itemdescription {
    margin-top: 8px;
  }

  .aftersales-itemdescription, .aftersales-items {
    padding: 15px 8px;
    background: #fff;
    overflow: hidden;
  }

  .aftersales-items {
    border-top: solid #e1e1e1 1px;
  }

  .aftersales-items .desc {
    padding-left: 10px;
  }

  .aftersales-items .desc a {
    padding-bottom: 5px;
    font-size: 14px;
  }

  .aftersales-itemdescription .l {
    color: #6f6f6f;
  }

  .aftersales-itemdescription .l, .aftersales-itemdescription .r {
    float: left;
    width: 50%;
  }

  .modal-header {
    padding: 0px 0 0 15px;
  }

  .modal-header .close {
    background: #265baa;
    color: #fff;
    padding: 8px 10px;
    opacity: 1;
  }

  .modal-title {
    padding: 5px;
    padding-right: 15px;
    text-align: center;
    color: #265baa;
  }

  .aftersales-itemdescription .btn {
    background: #fff;
    color: #275bab;
    border: #275bab solid 1px;
    font-size: 12px;
    margin-left: 5px;
  }

  .form-control {
    border: #275bab solid 1px;
  }

  .myvux-swiper .nav-tabs {
    background: #fff;
  }

  .myvux-swiper .nav-tabs > li > a {
    color: #989898;

  }

  .myvux-swiper .nav-tabs > li.active > a {
    color: #275bab;
  }

  .tab-content {
    background: #f5f5f5;
  }

  .global-red {
    color: #dc0000;
  }

  .myvux-swiper .parentnav-tabs li {
    width: 50%;
    text-align: center;
    background: #f5f5f5 !important;

  }

  .myvux-swiper .parentnav-tabs a {
    color: #275bab !important;
  }

  .text-center-logo2 {
    background: #f5f5f5;
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  window.jQuery = require('jquery');
  export default{
    ready(){
      require('bootstrap')
    },
    data(){
      return {
        parentTab: ['保修', '退换货'],
        index: 1
      }
    },
    components: {
      xHeader
    },
    methods: {
      test(a){
        console.log(a);
        window.alert('click')
      }
    }
  }
</script>
