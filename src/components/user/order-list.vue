<template>
  <setion class="j-order">
    <header class="j-header">
      <div class="j-header-search j-brand j-brand-info">
        <input value="" placeholder="请输入关键字" type="text">
      </div>
    </header>
    <section class="filter-sort h45">
      <tab :line-width="0" active-color="#fc378c">
        <tab-item :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
      </tab>
    </section>
  </setion>
  <section class="order-container">
    <div class="j-list">
      <!--去支付-->
      <section class="j-item">
        <a href="javascript:;" class="poi-head">
          <div class="aftersales-itemdescription j-itemsales">
            <div class="l">
              <div class="sales-status">
                状态：<span class="b-color">客服代下单</span>
              </div>
              <div class="sales-leftdays">
                总价：<span class="global-red"><ins></ins>36000</span>
              </div>
            </div>
            <div class="r text-right">
              <button type="button" class="btn goto toPay">
                去支付
              </button>
            </div>
          </div>
        </a>
        <div class="txt">
          <a href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/order/good-sample-200x200.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <p class="desc">多功能烤箱 GEKD 40000B</p>
              <div class="b-color">下单日期：</div>
              <p class="price-data">
                2015-4-23
                <span class="bought">已售7</span>
              </p>
            </div>
          </a>
        </div>
      </section>
      <!--已发货-->
      <section class="j-item">
        <a href="javascript:;" class="poi-head">
          <div class="aftersales-itemdescription j-itemsales">
            <div class="l">
              <div class="sales-status">
                状态：<span class="b-color">已发货</span>
              </div>
              <div class="sales-leftdays">
                总价：<span class="global-red"><ins></ins>36000</span>
              </div>
            </div>
            <div class="r text-right">
              <button type="button" class="btn goto receipt">
                确认收货
              </button>
            </div>
          </div>
        </a>
        <div class="txt">
          <a href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/order/good-sample-200x200.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <p class="desc">多功能烤箱 GEKD 40000B</p>
              <div class="b-color">下单日期：</div>
              <p class="price-data">
                2015-4-23
                <span class="bought">已售7</span>
              </p>
            </div>
          </a>
        </div>
      </section>
      <!--已签收-->
      <section class="j-item">
        <a href="javascript:;" class="poi-head">
          <div class="aftersales-itemdescription j-itemsales">
            <div class="l">
              <div class="sales-status">
                状态：<span class="b-color">已签收</span>
              </div>
              <div class="sales-leftdays">
                总价：<span class="global-red"><ins></ins>36000</span>
              </div>
            </div>
            <div class="r text-right">
              <button type="button" class="btn goto sales">
                申请售后
              </button>
              <button type="button" class="btn goto comment">
                去评价
              </button>

            </div>
          </div>
        </a>
        <div class="txt">
          <a href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/order/good-sample-200x200.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <p class="desc">多功能烤箱 GEKD 40000B</p>
              <div class="b-color">下单日期：</div>
              <p class="price-data">
                2015-4-23
                <span class="bought">已售7</span>
              </p>
            </div>
          </a>
        </div>
      </section>
      <!--分期支付-->
      <section class="j-item">
        <a href="javascript:;" class="poi-head">
          <div class="aftersales-itemdescription j-itemsales">
            <div class="l">
              <div class="sales-status">
                状态：<span class="b-color">分期支付</span>
              </div>
              <div class="sales-leftdays">
                总价：<span class="global-red"><ins></ins>36000</span>
              </div>
            </div>
            <div class="r text-right">
              <button type="button" class="btn goto contact-service">
                联系客服
              </button>
            </div>
          </div>
        </a>
        <div class="txt">
          <a href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/order/good-sample-200x200.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <p class="desc">多功能烤箱 GEKD 40000B</p>
              <div class="b-color">下单日期：</div>
              <p class="price-data">
                2015-4-23
                <span class="bought">已售7</span>
              </p>
            </div>
          </a>
        </div>
      </section>
      <!--现金支付，待确认-->
      <section class="j-item">
        <a href="javascript:;" class="poi-head">
          <div class="aftersales-itemdescription j-itemsales">
            <div class="l">
              <div class="sales-status">
                状态：<span class="b-color">现金支付，待确认</span>
              </div>
              <div class="sales-leftdays">
                总价：<span class="global-red"><ins></ins>36000</span>
              </div>
            </div>
            <div class="r text-right">
              <button type="button" class="btn goto view-status">
                查看状态
              </button>
              <button type="button" class="btn goto appeal">
                申诉
              </button>
            </div>
          </div>
        </a>
        <div class="txt">
          <a href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/order/good-sample-200x200.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <p class="desc">多功能烤箱 GEKD 40000B</p>
              <div class="b-color">下单日期：</div>
              <p class="price-data">
                2015-4-23
                <span class="bought">已售7</span>
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </section>
  <div class="view-all">
    没有更多订单了
  </div>
</template>
<style>
  .j-order .j-header {
    border-bottom: none;
  }

  .j-list {
    margin-top: 10px;
    background: #f5f5f5;
  }

  .j-item {
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .j-item .j-itemsales {
    padding: 5px 20px;
    padding-bottom: 10px;
  }

  .j-item .txt {
    width: 90%;
    padding: 12px 5%;
  }

  .aftersales-itemdescription .goto {
    border-radius: 0;
    font-family: microsoft yahei;
    padding: 0px;
    font-size: 12px;
    width: 45%;
    line-height: 32px;
  }

  .aftersales-itemdescription .receipt {
    color: #dc0000;
    background: #ffffff;
    border-color: #dc0000;
  }

  .aftersales-itemdescription .toPay {
    background: #dc0000;
    color: #ffffff;
    border-color: #dc0000;

  }

  .j-item .contact-service {
    background: #265baa;
    border-color: #265baa;
    color: #ffffff;
  }

  .j-item .aftersales-itemdescription .l {
    width: 50%;
  }

  .j-item .aftersales-itemdescription .r {
    width: 50%;
  }

  .j-item .sales {
    border-color: #265baa;
    background: #ffffff;
    color: #265baa;
  }

  .j-item .comment {
    background: #6fa4d8;
    border-color: #6fa4d8;
    color: #ffffff;
  }

  .j-item .view-status {
    background: #05c933;
    border-color: #05c933;
    color: #ffffff;
  }

  .j-item .appeal {
    background: #f2ac06;
    border-color: #f2ac06;
    color: #ffffff;
  }

  .b-color {
    color: #000000;
    font-size: 12px;
  }

  .j-item {
    margin-bottom: 10px;
    background-color: #fff;
  }

  .j-item .poi-head {
    display: block;
    border-bottom: 1px solid #e0e0e0;
  }

  .j-item .img-wrapper {
    float: left;
    position: relative;
    width: 84px;
    overflow: hidden;
  }

  .img-wrapper img {
    display: block;
    width: 108px;
  }

  .j-item .info-wrapper {
    position: relative;
    margin-left: 96px;

  }

  .txt > a {
    padding: 0px;
    width: 100%;
  }

  .j-item .desc {
    line-height: 25px;
    height: 25px;
    font-size: 14px;
    color: #275bab;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .j-item .price-data {
    color: #6f6f6f;
  }

  .j-item .price-data > span {
    float: right;
    font-size: 12px;
  }

  .j-item .price-line {
    line-height: 16px;
    height: 16px;
    font-size: 0;
    color: #ff4683;
    overflow: hidden;
  }

  .j-order .vux-tab .vux-tab-item.vux-tab-selected {
    color: #275bab !important;
  }

  .h45 {
    height: 45px;
  }

  .j-order .vux-tab .vux-tab-item {
    color: #989898 !important;
  }
</style>
<script>
  import tab from 'vux/src/components/tab/tab.vue'
  import tabItem from 'vux/src/components/tab/tab-item.vue'
  export default{
    data(){
      return {
        demo2: '全部',
        list2: ['全部', '已预约', '预约中', '未成功']
      }
    },
    components: {
      tab,
      tabItem
    }
  }
</script>
