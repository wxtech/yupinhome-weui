<template>
  <section class="wrap">
    <div class="title-line">
      <h2>我的权利</h2>
      <a href="#" class="viplink"><span class="card">我的VIP卡</span></a>
    </div>
    <div class="power-box">
      <flexbox>
        <flexbox-item>
          <div class="item-box">
            <div class="flex-demo">
              <div class="flex-box">
                <img slot="icon" src="~assets/usercenter/jifeng-icon-80x80.png">
                <p>积分</p>
              </div>
            </div>
            <div class="flex-demo">1851<b>分</b></div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="item-box">
            <div class="flex-demo">
              <div class="flex-box">
                <img slot="icon" src="~assets/usercenter/youhuiquan-icon-80x80.png">
                <p>积分</p>
              </div>
            </div>
            <div class="flex-demo">2<b>张</b></div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </section>
</template>
<style>
  .title-line {
    line-height: 24px;
    padding: 0 5%;
    overflow: hidden;
  }

  .wrap .card {
    text-align: right;
    line-height: 48px;
    color: #265baa;
  }

  .card {
    float: right;
    cursor: pointer;
  }

  .card:before {
    content: '';
    float: right;
    margin-top: 21px;
    width: 7px;
    height: 7px;
    border-top: 1px solid #111;
    border-right: 1px solid #111;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-left: 5px;
    color: #265baa;

  }
  .viplink {
    float:right;
    font-size:14px;
  }

  .power-box {
    position: relative;
    /*padding-top: 10px;*/
  }

  .power-box .vux-flex-row {
    border-top: 1px solid #e4e6e7;
    padding: 10px 0;
  }

  .power-box:before {
    content: " ";
    width: 100%;
    height: 1px;
    border-top: 1px solid #e4e6e7;
    color: #979797;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.3);
    transform: scaleY(0.3);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

  }

  .power-box .flex-demo {
    display: inline-block;
    color: #e20000;
    font-size: 30px;
    float: left;
  }

  .power-box .flex-demo:nth-child(1), .power-box .flex-demo:nth-child(3) {
    width: 60px;
    text-align: center;
  }

  .power-box .flex-demo p, .power-box .flex-demo b {
    font-size: 15px;
    color: #265baa;
    font-weight: normal;
  }

  .flex-box {
    width: 70%;
    text-align: center;
    display: inline-block;
  }

  .power-box .vux-flexbox-item {
    text-align: center;
  }

  .power-box .vux-flexbox-item .item-box {
    display: inline-block;
    margin: 0 auto;
    overflow: hidden;
  }

  .power-box .vux-flexbox-item:nth-child(1) {
    border-right: 1px solid #e4e6e7;
  }

  .power-box .vux-flexbox-item:nth-child(1) .flex-demo:nth-child(2), .power-box .vux-flexbox-item:nth-child(2) .flex-demo:nth-child(2) {
    padding-top: 13%;
  }

</style>
<script>
  import flexbox from 'vux/src/components/flexbox/flexbox.vue'
  import flexboxItem from 'vux/src/components/flexbox/flexbox-item.vue'
  export default{
    components: {
      flexbox,
      flexboxItem
    }
  }
</script>
