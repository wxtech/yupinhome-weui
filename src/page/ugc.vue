<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
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
  <section>
    <div class="contact-wrap">
      <h3>请输入您要评价的内容</h3>
      <textarea maxlength="200">dd</textarea>
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
  </section>
  <section>
    <div class="contact-btn">
      <button>提交</button>
    </div>
  </section>
</template>
<style>
  .star-list {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    background: #ffffff;
    padding-bottom: 10px;
    overflow: hidden;
  }

  .star-list li {
    height: 38px;
    position: relative;
  }

  .star-list nav {
    position: absolute;
    left: 88px;
    top: 0px;
  }

  .star-list nav a {
    float: left;
    background: url(../assets/category/Favouritebt.png) no-repeat 0 0;
    width: 34px;
    height: 34px;
    margin-right: 10px;
    -webkit-transition: .3s;
    transition: .3s;
    background-size: contain;
    background-position: 11px 17px;
  }

  /*.star-list nav a.active {*/
  /*background-position: 11px -15px;*/
  /*}*/

  .upload-img, .upload-img a {
    position: relative;
    overflow: hidden;
  }

  .upload-img a {
    border: 1px dashed #275bab;
    padding: 30px 20px;
    display: inline-block;
  }

  .ugc-bar {
    width: 100%;
    position: relative;
    padding: 10px 20px;
    text-align: left;
    border-bottom: 1px solid #cccccc;
    overflow: hidden;
  }

  .ugc-img {
    float: left;
    position: relative;
    width: 80px;
    overflow: hidden;
  }

  .ugc-img img {
    display: block;
    width: 80px;
  }

  .ugc-info {
    position: relative;
    margin-left: 100px;
  }

  .ugc-info h2 {
    line-height: 35px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #275bab;
    font-size: 15px;
  }

  .ugc-info p:nth-child(2) {
    color: #000;
  }

  .ugc-info p:nth-child(3) {
    text-align: right;
  }

  .ugc-bar .black {
    color: #000;
  }

  .fl {
    float: left;
  }

  .order-num {
    float: right;
  }

  .scoreList {
    padding: 0 20px;
  }

  .scoreList li span {
    padding-top: 15px;
  }

  .scoreList li nav a:active {
    background-position: 11px -15px;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  export default{
    data(){
      return {
        headerTitle: '评论商品'
      }
    },
    components: {
      navBox
    }
  }
</script>
