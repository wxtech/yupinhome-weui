<template>
  <section class="memberCenter">
    <div class="content">
      <div class="head-top">
        <img src="~assets/usercenter/img-220x220.jpg">
        <span>账号管理</span>
      </div>
      <div class="person_i">
        <div class="membername">
          <p class="p1">Robort</p>
          <p class="p2">普通会员</p>
          <p class="p-text">您的帐号信息尚不完善，请在帐号管理中完善您的帐号</p>
        </div>
      </div>
      <div class="area">
        <div class="area-right">
          <div class="msg-box">
            <a href="javascript:;"><img src="~assets/usercenter/top-xiaoxi-88x88.png">
              <i class="msg-num">5</i>
            </a>
            <p>消息</p>
          </div>
          <div class="msg-box">
            <a href="javascript:;"><img src="~assets/usercenter/top-erweima-88x88.png"></a>
            <p>推荐朋友</p>
          </div>
        </div>
        <p>签到赢积分</p>
      </div>
    </div>
    <div class="h_bottom">
      <div class="mytabs">
        <div class="mytab-item"><a class="" href="##"><img src="~assets/usercenter/shoucang-icon-140x140.png"></a><span>我的收藏</span>
        </div>
        <div class="mytab-item"><a class="" href="##"><img src="~assets/usercenter/yuyue-icon-140x140.png"></a><span>我的预约</span>
        </div>
        <div class="mytab-item"><a class="" href="##"><img src="~assets/usercenter/kefu-icon-140x140.png"></a><span>我的客服</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
  /* body {
     background-color: #ff0000;
   }*/
  .memberCenter {
    background-size: 100% 100%;
    padding-bottom: 10px;
    padding-top: .21rem;
    position: relative;
    background: #ffffff;
  }

  .content {
    padding: 0 .24rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    padding-bottom: .3rem;
    color: #fff;
  }

  .content .head-top {

    text-align: center;
  }

  .content .head-top > span {
    color: #424954;
    font-size: 15px;
    padding-top: 10px;

  }

  .content .head-top > img {
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    
  }

  .msg-num {
    position: absolute;
    border-radius: 50%;
    width: 0.42rem;
    line-height: 0.42rem;
    border: 1px solid #e83939;
    color: #e83939;
    position: absolute;
    top: 0;
    background: #fff;
    right: -7px;
  }

  .membername .p1 {
    color: #414a55;
  }
   .p1 {
    color: #414a55;
    font-size:15px;
  }

  .p2 {
    color: #414a55;
    font-size:13px;
  }

  .p-text {
    color: #7c858d;
    font-size:13px;
    margin-top:10px;
  }

  .content .person_i {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: .2rem;
    padding-top: .25rem;
  }

  .area, .msg-box {
    position: relative;
  }

  .msg-box:nth-child(2) {
    margin-left: 10px;
  }

  .area {
    text-align: center;
  }

  .area span {

    color: #265baa;
    font-size: 15px;

  }

  .msg-box {
    float: left;

  }

  .area a {
    display: block;
    width: 35px;
    margin: 0 auto;
    position: relative;
  }

  .area-right p {
    display: inline-block;
    text-align: center;
    color: #265baa;
  }

  /*.area img {*/
  /*width: 0.8rem;*/
  /*height: 0.8rem;*/
  /*}*/

  .area > p {
    line-height: 0.68rem;
    background: #265baa;
    display: inline-block;
    color: #ffffff;
    padding: 0 15%;
    margin-top: 10px;
  }

  .area-right {
    display: block;
  }

  .h_bottom {
    margin: 0;
    border-top: 1px solid #DDD8CE;
    overflow: hidden;
    font-size: inherit;
    /* font-weight: 400; */
    position: relative;
    left: 0;
    bottom: 0;
    /* height: 1.8rem; */
    /* display: -webkit-box; */
    display: -ms-flexbox;
    /* display: flex; */
    /* -webkit-box-align: center; */
    -ms-flex-align: center;
    /* align-items: center; */
    width: 100%;
    text-align: center;
    font-size: .24rem;
    padding-top: 10px;
  }

  .h_bottom .mytabs .mytab-item {
    width: 33%;
  }

  .h_bottom .mytabs .mytab-item a {
    height: 24vw;
  }
</style>
<script>
  export default{}
</script>
