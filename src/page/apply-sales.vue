<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2 navbar3">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <section class="ugc-bar">
    订单信息
    <span class="order-num">订单编号：112323131</span>
  </section>
  <section class="ugc-bar">
    <p>状态：<span class="black">已签收</span></p>
    <p>总价：<span class="red"><ins></ins>233332</span></p>
  </section>
  <section class="ugc-bar">
    <div class="ugc-img">
      <img src="~assets/order/good-sample-200x200.jpg"/>
    </div>
    <div class="ugc-info">
      <h2>多功能烤箱 GEKD 40000B</h2>
      <p>购买日期：</p>
      <p><span class="fl">2016-08-12</span>x1 件</p>

    </div>
  </section>
  <section class="sales-wrap">
    <div class="ugc-bar" style="overflow: inherit;">
      <h3>申请类别</h3>
      <div class="selbox">
        <input class="tar" data-class="tar" v-on:click="bindEvent()" :value="vals" type="text" readonly
               placeholder="请选择">
        <div v-if="flag">
          <label v-for="item in list" class="tar"><input class="tar" type="radio" v-model="vals" :value="item.name">{{item.name}}</label>
        </div>
      </div>
    </div>
    <div class="contact-wrap">
      <h3>请填写申诉理由</h3>
      <textarea maxlength="200"></textarea>
      <span>请控制在200字以内</span>
      <div class="upload-img">
        <a href="javascript:;" class="upload-item">
          上传照片
        </a>
      </div>
      <span>您可以上传最多3张图片</span>
    </div>
    <div class="star-list">
      <ul class="scoreList">
        <li>
          <span>综合印象</span>
          <nav>
            <a href="javascript:;" class="active"></a>
            <a href="javascript:;" class="active"></a>
            <a href="javascript:;" class="active"></a>
            <a href="javascript:;" class="active"></a>
            <a href="javascript:;" class="active"></a>
          </nav>
          <input type="hidden" value="棒极了">
        </li>
        <li>
          <span>服务指数</span>
          <nav>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
          </nav>
          <input type="hidden" value="没有想象的那么差">
        </li>
        <li>
          <span>消费指数</span>
          <nav>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
          </nav>
          <input type="hidden" value="0">
        </li>
      </ul>
    </div>
    <div class="ugc-bar">
      <h3>要求退款金额</h3>
      <div><input type="text" class="refund"></div>
    </div>
  </section>
  <section>
    <div class="contact-btn">
      <button>提交</button>
    </div>
  </section>
</template>
<style>
  /*body {*/
  /*font-size: 1.4rem*/
  /*}*/

  /*html {*/
  /*font-size: 62.5%*/
  /*}*/
  .sales-wrap {
    margin-top: 10px;
    border-top: 1px solid #e1e1e1;
  }

  .upload-img a {
    color: #265baa;
    border-color: #265baa;
  }

  .contact-wrap textarea {
    resize: none;
    padding: 5px;
    height: 190px;
  }

  .ugc-bar h3 {
    line-height: 40px;
    font-size: 14px;
  }

  .refund {
    height: 35px;
  }

  .selbox {
    width: 170px;
    position: relative;
    background-color: #f5f5f5;
  }

  .selbox:after {
    content: "";
    position: absolute;
    top: 11px;
    right: 6px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #666;
  }

  .selbox > input {
    width: 100%;
    height: 30px;
    text-indent: 6px;
  }

  .selbox > div {
    position: absolute;
    width: 100%;
    top: 36px;
    left: 0;
    background-color: #f5f5f5;
    z-index: 2;
  }

  .selbox > div > label {
    display: block;
    cursor: pointer;
    text-indent: 10px;
    padding: 8px 0;
    margin: 0;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  export default{
    data(){
      return {
        headerTitle: '申请售后',
        list: {},
        vals: [], //选择的数据
        flag: false //toggle标记
      }
    },
    ready(){
      var _this = this;
      _this.initData();
      //下拉toggle效果
      document.addEventListener("click", function (e) {
        var c = e.target.className;
//        _this.flag = c === "tar" ? true : false;
        if (c === "tar") {
          _this.flag = true;
        } else {
          _this.flag = false;
        }
      });

    },
    methods: {
      initData: function () {
        let data = [{
          id: 1,
          name: "张一"
        }, {
          id: 2,
          name: "李二"
        }, {
          id: 3,
          name: "邓三"
        }];
        //赋值
        this.list = data;
      }
    },
    components: {
      navBox
    }
  }
</script>
