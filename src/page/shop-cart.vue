<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <section>
    <ul class="cart-item">
      <li>
        <div class="cart-box">
          <div class="cart-checkbox pr">
            <label>
              <input type="checkbox" value="1" id="checkboxFiveInput" name="carts">
              <div class="label"></div>
            </label>
          </div>
          <div class="cart-right">
            <div class="cart-img">
              <img src="~assets/order/good-sample-200x200.jpg"/>
            </div>
            <div class="pro-box">
              <h3>多功能烤箱 GEKD 40000B</h3>
              <p class="red ph">
                <ins></ins>
                233444
              </p>
              <div class="quantity-wrapper num-wrapper shopcart-wrapper">
                <a class="quantity-decrease J_ping">
                  <em id="minus">-</em>
                </a>
                <input type="tel" class="quantity" size="4" value="1" id="number">
                <a class="quantity-increase J_ping"><em id="plus">+</em></a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="cart-box">
          <div class="cart-checkbox pr">
            <label>
              <input type="checkbox" value="1" id="checkboxFiveInput" name="carts">
              <div class="label"></div>
            </label>
          </div>
          <div class="cart-right">
            <div class="cart-img">
              <img src="~assets/order/good-sample-200x200.jpg"/>
            </div>
            <div class="pro-box">
              <h3>多功能烤箱 GEKD 40000B</h3>
              <p class="red ph">
                <ins></ins>
                233444
              </p>
              <div class="quantity-wrapper num-wrapper">
                <a class="quantity-decrease J_ping">
                  <em id="minus">-</em>
                </a>
                <input type="tel" class="quantity" size="4" value="1" id="number">
                <a class="quantity-increase J_ping"><em id="plus">+</em></a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="order-orderPay">
      <div class="line">
        <span>已选择<span class="num">1</span>商品</span>
        <span>应付：<span class="red"><ins></ins>4554656</span></span>
      </div>
    </div>
  </section>
  <user-footer></user-footer>
</template>
<style>
  .ph {
    margin-top: 10px;
  }

  .order-orderPay {
    background-color: #fff;
    color: #999;
    padding: 9px;
    line-height: 2;
  }

  .order-orderPay .line {
    text-align: right;
    color: #000;
  }

  .order-orderPay .line > span:nth-child(1) {
    margin-right: 10px;
  }

  .cart-item {
    overflow: hidden;
  }

  .cart-item .cart-box {
    position: relative;
  }

  .cart-right {
    display: inline-block;
    width: 90%;
    vertical-align: top;
  }

  .cart-right .cart-img {
    width: 32%;
    float: left;
    padding: 0 15px;
    padding-left: 0px;
    height: 23vw;
    overflow: hidden;
  }

  .pr {
    position: relative;
    line-height: 22px;
    display: inline-block;
    width: 30px;
    margin: 50px 0;
  }

  .pro-box h3 {
    color: #275bab;
    font-size: 15px;
    padding-top: 6px;
    font-weight:normal;
  }

  .cart-item li {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    background: #ffffff;
  }

  .cart-item input[type=checkbox] {
    visibility: hidden;
  }

  .cart-item .label {
    cursor: pointer;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    bottom: 0;
    background: #eee;
    border: 1px solid #ddd;
    display: block;
  }

  .cart-item input[type=checkbox]:checked + .label:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 5px;
    background: transparent;
    top: 5px;
    left: 3px;
    border: 3px solid #333;
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: 1;
  }

  .shopcart-wrapper {
    padding-left: 0px;
    margin-left: 0px;
  }
</style>
<script>
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'
  import group from 'vux/src/components/group/index.vue'
  import selector from 'vux/src/components/selector/index.vue'
  export default{
    data(){
      return {
        headerTitle: '购物车',
        defaultValue: '',
        plainList: ['广东', '广西'],
        list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
        value1: '广西',
        value2: 'gd',
        list1: ['A', 'B', 'C']
      }
    },
    components: {
      navBox,
      userFooter,
      group,
      selector
    },
    methods: {
      onChange (val) {
        console.log(val)
      }
    }
  }
</script>
