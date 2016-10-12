<template>
  <section class="h51">
    <header class="j-header j-search">
      <div class="j-header-search">
        <input value="" class="inp_a" placeholder="请输入关键字" type="text">
        <a href="javascript:;" class="search_a"><span id="J_style_icon"></span></a>
      </div>
    </header>
  </section>
  <article>
    <section class="j-filter-sort">
      <section class="filter-sort">
        <ul class="filter-sort-head">
          <li>默认排序</li>
          <li class="head-tab tab4">销量优先</li>
          <li class="head-tab tab4">品牌</li>
          <li class="head-tab tab4">价格</li>
        </ul>
      </section>
    </section>
    <section class="details-container">
      <div class="details-div">
        <div class="details-line">
          <a class="details-content" href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/category/1.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <div class="title-line">elica skin 挂壁式脱排油烟机</div>
              <p class="red">¥ 23321.00</p>
              <p class="price">参考价
                <ins>30000.00</ins>
              </p>
              <p class="price"><span><em class="num">1</em>人评价</span><span>好评率<em class="nice">100%</em></span></p>
              <p class="price-line"><span>VIP优惠</span><span>可用积分抵扣</span></p>
            </div>
          </a>
        </div>
        <div class="details-line">
          <a class="details-content" href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/category/1.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <div class="title-line">elica skin 挂壁式脱排油烟机</div>
              <p class="red">¥ 23321.00</p>
              <p class="price">参考价
                <ins>30000.00</ins>
              </p>
              <p class="price"><span><em class="num">1</em>人评价</span><span>好评率<em class="nice">100%</em></span></p>
              <p class="price-line"><span>VIP优惠</span><span>可用积分抵扣</span></p>
            </div>
          </a>
        </div>
        <div class="details-line">
          <a class="details-content" href="javascript:;">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="~assets/category/1.jpg"/>
              </div>
            </div>
            <div class="info-wrapper">
              <div class="title-line">elica skin 挂壁式脱排油烟机</div>
              <p class="red">¥ 23321.00</p>
              <p class="price">参考价
                <ins>30000.00</ins>
              </p>
              <p class="price"><span><em class="num">1</em>人评价</span><span>好评率<em class="nice">100%</em></span></p>
              <p class="price-line"><span>VIP优惠</span><span>可用积分抵扣</span></p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </article>
  <div class="view-all">
    没有更多商品了
  </div>
</template>
<style>
  .h51 {
    height: 51px;
  }

  section {
    margin-bottom: 0;
  }

  .price em {
    font-style: normal;
  }

  .details-container {
    margin-top: 10px;
    background: #f5f5f5;
  }

  .j-header {
    background-color: #FFF;
    position: relative;
    width: 100%;
    z-index: 2;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: 0 0 2px #d9d9d9;
    overflow: hidden;
  }

  #J_style_icon {
    background: url("~assets/category/icon.jpg") no-repeat;
    background-size: cover;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }

  .j-header-search {
    padding: 10px 0;
    overflow: hidden;
  }

  .j-search .j-header-search > input.inp_a {
    width: 77%;
    border: 1px solid #275bab;
    height: 30px;
    overflow: hidden;
    background: #fff;
    font-size: 12px;
    float: left;
    margin-left: 20px;
    padding-left: 10px;
  }

  .red {
    color: #dc0000;
  }

  .price {
    color: #808080;
  }

  .price span:nth-child(2) {
    margin-left: 10px;
  }

  ins {
    text-decoration: none;
  }

  ins:before {
    content: '¥';
    padding-right: 5px;
  }

  .j-header .j-header-search > .search_a {
    float: right;
    margin-right: 20px;
    width: 10%;
    text-align: center;
    background: none;
    color: #FFFFFF;
  }

  .j-header .j-header-search > .search_a, .j-header-search > input {
    box-sizing: border-box;
    line-height: 30px;
  }

  .filter-sort {
    width: 100%;
    height: 40px;
  }

  .filter-sort .filter-sort-head {
    position: relative;
    top: 0;
    width: 100%;
    line-height: 39px;
    height: 39px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #f8f8f8;
    text-align: center;
    font-size: 13px;
    color: #666;
    z-index: 12;
    background: #ffffff;
  }

  .filter-sort .filter-sort-head .head-tab, .filter-sort .filter-sort-head li {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    width: 25%;
    font-size: 15px;
    text-overflow: ellipsis;
  }

  .filter-sort-head li {
    color: #275bab;
  }

  .filter-sort .filter-sort-head .tab4 {
    color: #989898;
  }

  .filter-sort .filter-sort-head .head-tab:after {
    content: '';
    display: inline-block;
    margin-left: 7px;
    margin-bottom: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 6px;
    height: 6px;
    -webkit-transform: rotate(-227deg);
    -moz-transform: rotate(-227deg);
    -ms-transform: rotate(-227deg);
    -o-transform: rotate(-227deg);
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    transform: rotate(-227deg);
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 1px solid transparent;
    border-top: 7px solid #275bab;
  }

  .details-content {
    display: block;
    padding: 12px 12px 12px 0;
    text-decoration: none;
    border-bottom: 1px solid #e0e0e0;
    background: #ffffff;
    padding-left: 12px;
    margin-bottom: 10px;
  }

  .view-all {
    text-align: center;
    padding: 10px 0 50px;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2), not all {

    .details-line .details-content {
      border: none;
      background-image: -webkit-linear-gradient(90deg, #e0e0e0, #e0e0e0 50%, transparent 50%);
      background-image: -moz-linear-gradient(90deg, #e0e0e0, #e0e0e0 50%, transparent 50%);
      background-image: -o-linear-gradient(90deg, #e0e0e0, #e0e0e0 50%, transparent 50%);
      background-image: linear-gradient(0, #e0e0e0, #e0e0e0 50%, transparent 50%);
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }

  .img-wrapper {
    float: left;
    position: relative;
    width: 105px;
    overflow: hidden;
  }

  .info-wrapper {
    position: relative;
    margin-left: 115px;
  }

  .info-wrapper p:nth-child(2) {
    font-size: 17px;
  }

  .info-wrapper p:last-child {
    padding-top: 6px;
  }

  .info-wrapper .title-line {
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .info-wrapper p {
    line-height: 18px;
    overflow: hidden;
  }

  .desc {
    line-height: 16px;
    height: 32px;
    margin: 4px 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
    color: #88888d;
  }

  .price-line {
    line-height: 25px;
    color: #ffffff;
    overflow: hidden;
  }

  .price-line span {
    padding: 0 8px;
  }

  .price-line span:nth-child(1) {
    background: #e98585;
    border: 1px solid #d20000;
    margin-right: 10px;
  }

  .price-line span:nth-child(2) {
    background: #e5cb6e;
    border: 1px solid #d4a603;
  }

  .title-line {
    color: #275bab;
    padding: 0px;
    font-size: 17px;
  }
</style>
<script>
  export default{
    props: {
      searchText: String
    },
    data () {
      return {
        demo: '食物保鲜',
        list: [
          '食物保鲜', '厨房家电', '衣服呵护', '生活家电', '品味生活', '厨房五金设备', '炊具用品', '户外用品'
        ]
      }
    }

  }
</script>
