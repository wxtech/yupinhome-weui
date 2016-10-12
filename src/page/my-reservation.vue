<template>
  <header class="navbar navbar2 navbar3">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <section class="filter-sort h45">
    <tab :line-width="0" active-color="#275bab">
      <tab-item :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
    </tab>
  </section>
  <section class="order-container">
    <div class="j-list">
      <!--签到-->
      <section class="j-item j-my-item">
        <div class="aftersales-itemdescription j-itemsales">
          <div class="l">
            <h4>上海正大广场门店</h4>
            <p>您已预约在2016年9月20日下午3点至某某路某某号1202室某具体地址</p>
            <div class="sales-status">
              预约编码: <span class="b-color">201232313213213</span>
            </div>
            <div class="sales-leftdays">
              陪同客服：<span class="my-name">张小花</span><span class="my-phone">13412321313</span>
            </div>
          </div>
          <div class="r text-right my-right">
            <a href="javascript" class="cur">签到</a>
            <a href="javascript">取消</a>
          </div>
        </div>


      </section>
      <!--预约中-->
      <section class="j-item j-my-item">
        <div class="aftersales-itemdescription j-itemsales">
          <div class="l">
            <h4>上海正大广场门店</h4>
            <p>您已预约在2016年9月20日下午3点至某某路某某号1202室某具体地址</p>
            <div class="sales-status">
              预约编码: <span class="b-color">201232313213213</span>
            </div>
            <div class="sales-leftdays">
              陪同客服：<span class="my-name">张小花</span><span class="my-phone">13412321313</span>
            </div>
          </div>
          <div class="r text-right my-right">
            <span class="reservation-btn color-green">预约中</span>
          </div>
        </div>
      </section>
      <!--已完成-->
      <section class="j-item j-my-item">
        <div class="aftersales-itemdescription j-itemsales">
          <div class="l">
            <h4>上海正大广场门店</h4>
            <p>您已预约在2016年9月20日下午3点至某某路某某号1202室某具体地址</p>
            <div class="sales-status">
              预约编码: <span class="b-color">201232313213213</span>
            </div>
            <div class="sales-leftdays">
              陪同客服：<span class="my-name">张小花</span><span class="my-phone">13412321313</span>
            </div>
          </div>
          <div class="r text-right my-right">
            <span class="reservation-btn color-gray">已完成</span>
          </div>
        </div>
      </section>
      <!--爽约-->
      <section class="j-item j-my-item">
        <div class="aftersales-itemdescription j-itemsales">
          <div class="l">
            <h4>上海正大广场门店</h4>
            <p>您已预约在2016年9月20日下午3点至某某路某某号1202室某具体地址</p>
            <div class="sales-status">
              预约编码: <span class="b-color">201232313213213</span>
            </div>
            <div class="sales-leftdays">
              陪同客服：<span class="my-name">张小花</span><span class="my-phone">13412321313</span>
            </div>
          </div>
          <div class="r text-right my-right">
            <span class="reservation-btn color-red">已完成</span>
          </div>
        </div>
      </section>
      <!--未成功-->
      <section class="j-item j-my-item">
        <div class="aftersales-itemdescription j-itemsales">
          <div class="l">
            <h4>上海正大广场门店</h4>
            <p>您已预约在2016年9月20日下午3点至某某路某某号1202室某具体地址</p>
            <div class="sales-status">
              预约编码: <span class="b-color">201232313213213</span>
            </div>
            <div class="sales-leftdays">
              陪同客服：<span class="my-name">张小花</span><span class="my-phone">13412321313</span>
            </div>
          </div>
          <div class="r text-right my-right">
            <span class="reservation-btn color-yellow">已完成</span>
          </div>
        </div>
      </section>
    </div>
  </section>
  <div class="view-all">
    没有更多预约了
  </div>
  <section class="m-footer">
    <div class="weui_tabbar">
      <a href="javascript:;" class="weui_tabbar_item">
        <p class="weui_tabbar_label">
          <img src="~assets/usercenter/bottombar-icon03-80x80.png" class="service-pic"/>
          <span slot="label" class="label-service">联系客服预约</span>
        </p>
      </a>
    </div>
  </section>
</template>
<style>
  .service-pic {
    width: 10%;
  }

  .label-service {
    vertical-align: middle;
  }

  .j-my-item span.reservation-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 75%;
    margin: 0 auto;
    text-align: center;
    color: #FFFFFF;
    line-height: 30px;
  }

  .j-my-item span.reservation-btn.color-green {
    background: #4fda12;

  }

  .j-my-item span.reservation-btn.color-gray {
    background: #8e8e8e;
  }

  .j-my-item span.reservation-btn.color-red {
    background: #df1616;
  }

  .j-my-item span.reservation-btn.color-yellow {
    background: #f5b710;
  }

  .j-my-item {
    border-top: none;
  }

  .j-my-item .aftersales-itemdescription .l, .j-my-item .aftersales-itemdescription .r {
    width: auto;
  }

  .j-my-item .aftersales-itemdescription .r {
    width: 20%;
  }

  .j-my-item h4 {
    color: #275bab;
    font-size: 16px;
  }

  .j-my-item p {
    font-size: 12px;
    padding-bottom: 10px;
  }

  .j-my-item .poi-head {
    border: none;
  }

  .j-my-item span {
    color: #000000;
  }

  .j-my-item .my-phone {
    padding-left: 10px;
  }

  .j-my-item .my-name, .j-my-item .my-phone {
    color: #000000;
    font-size: 12px;
  }

  .j-my-item .aftersales-itemdescription .l {
    width: 80%;
    padding: 10px 0;
  }

  .j-my-item .j-itemsales {
    padding: 0px 0px 0px 20px;
  }

  .j-my-item .my-right {
    position: relative;
    height: 135px;
  }

  .j-my-item .my-right a {
    display: inline-block;
    width: 100%;
    height: 67.5px;
    line-height: 67.5px;
    text-align: center;
    border: 1px solid #275bab;
    box-sizing: border-box;
    overflow: hidden;
    float: left;
    color: #275bab;
  }

  .j-my-item {
    border-top: 1px solid #e0e0e0;
  }

  .j-my-item .aftersales-itemdescription {
    margin-top: 0;
  }

  .j-my-item .my-right a.cur {
    background: #275bab;
    color: #FFFFFF;
  }

</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import tab from 'vux/src/components/tab/tab.vue'
  import tabItem from 'vux/src/components/tab/tab-item.vue'
  export default{
    data(){
      return {
        headerTitle: '我的预约',
        demo2: '全部',
        list2: ['全部', '已预约', '预约中', '未成功']
      }
    },
    components: {
      navBox,
      tab,
      tabItem
    }
  }
</script>
