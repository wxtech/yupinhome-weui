<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的售后</x-header>

  <div class="repair-search">
    <input class="form-control" placeholder="请输入关键词">
  </div>
  <tab :index.sync="index">
    <tab-item class="vux-center" v-for="item in parentTab">{{item}}</tab-item>
  </tab>

  <swiper :index.sync="index" >
    <swiper-item>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">全部</a>
        </li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">保修期内商品</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">已过保商品</a></li>
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
            <div class="r">
              <button type="button" class="btn">
                延保
              </button>
              <button type="button" class="btn">
                返修
              </button>
            </div>
          </div>
          <div class="aftersales-items">
            <div class="l">
              <a>
                <img src="~assets/category/sub-cat-img04-438x326.jpg">
              </a>
            </div>
            <div class="r">

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
        <div role="tabpanel" class="tab-pane" id="profile">bbb</div>
        <div role="tabpanel" class="tab-pane" id="messages">ccc</div>
      </div>
    </swiper-item>
  </swiper>

</template>
<style>
  @import "~assets/bower_components/bootstrap/dist/css/bootstrap.css";

  .aftersales-items {
    overflow: hidden;
  }

  .aftersales-items .l {
    width: 20%;
  }

  .aftersales-items .r {
    width: 80%;
  }

  .vux-tab {
    width: 100%;
  }

  .aftersales-itemdescription {
    overflow: hidden;
  }

  .l, .ll {
    float: left;
  }

  .r, .rr {
    float: right;
  }

  .aftersales-itemdescription .l, .aftersales-itemdescription .r {
    float: left;
    width: 50%;
  }

  .repair-search {
    padding: 10px 5px;
    background: -webkit-linear-gradient(top, #ededed, #fff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(top, #ededed, #fff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(top, #ededed, #fff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #ededed, #fff); /* 标准的语法 */
    border-top: #d9d9d9 solid 1px;
    border-bottom: #d9d9d9 solid 1px;
  }

  .form-control {
    border: #275bab solid 1px;
  }

  .vux-tab-item{
    background: #f5f5f5;
    color: #275bab;
    border: #ccc solid 1px !important;
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  import tab from 'vux/src/components/tab/tab.vue'
  import tabItem from 'vux/src/components/tab/tab-item.vue'
  import {Swiper, SwiperItem} from 'vux/src/components'

  window.jQuery = require('jquery')
  export default{
    ready(){
      require('bootstrap')
    },
    data(){
      return {
        parentTab: ['保修', '退换货'],
        childTab: ['全部', '保修期内商品', '已过保商品'],
        index: 0,
        childIndex: 0
      }
    },
    components: {
      xHeader,
      tab,
      tabItem,
      Swiper,
      SwiperItem
    },
    methods: {
      test(a){
        console.log(a);
        window.alert('click')
      }
    }
  }
</script>
