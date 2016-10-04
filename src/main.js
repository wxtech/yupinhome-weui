import Vue from 'vue'
import App from './App'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import numbershipcenter from './page/numbershipcenter.vue'
import deliverMethodslist from './page/methodslist.vue'
import userregister from './page/user-registration.vue'
import userregistersuccess from './page/user-registration-success.vue'
import userforgotpass from './page/user-forgot-password.vue'
import userresetpass from './page/user-reset-password.vue'
import userresetsuccess from './page/user-reset-success.vue'
import securitycenter from './page/security-center.vue'
import categorylist from './page/category-list.vue'
import categorybrand from './page/category-brand-list.vue'
import categorysearch from './page/category-search.vue'
import goodsdetail from './page/goods-details-page.vue'
import aftersalesRepair from './page/aftersales.vue'
import myCustomerServices from './page/myCustomerServices.vue'
import brandinformation from './page/brandInformation.vue'
import branddetails from './page/brandDetails.vue'
import waitreview from './page/wait-review.vue'
import orderlist from './page/order-management.vue'
import shopcart from './page/shop-cart.vue'
import mybookmark from './page/mybookmark.vue'
import myRight from './page/myRight.vue'
import myData from './page/myData.vue'
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
const router = new VueRouter()

router.map({
  // 首页
  '/': {
    component: Home
  },
  // 用户中心
  '/numbershipcenter': {
    component: numbershipcenter
  },
  // H5配送方式
  '/deliver-methodslist': {
    component: deliverMethodslist
  },
  // h5用户注册
  '/userregister': {
    component: userregister
  },
  // h5用户注册成功
  '/userregistersuccess': {
    component: userregistersuccess
  },
  // h5用户忘记密码
  '/userforgotpass': {
    component: userforgotpass
  },
  // h5用户重设密码
  '/userresetpass': {
    component: userresetpass
  },
  // h5用户重设密码成功
  '/userresetsuccess': {
    component: userresetsuccess
  },
  // h5安全中心
  '/securitycenter': {
    component: securitycenter
  },
  // H5商品分类.psd
  '/categorylist': {
    component: categorylist
  },
  // h5商品分类-品牌检索
  '/categorybrand': {
    component: categorybrand
  },
  //商品检索
  '/categorysearch': {
    component: categorysearch
  },
  //商品详情
  '/goodsdetail': {
    component: goodsdetail
  },
  //品牌信息
  '/brandinformation': {
    component: brandinformation
  },
  //品牌详情
  '/branddetails': {
    component: branddetails
  },
  //等待审核
  '/waitreview': {
    component: waitreview
  },
  //订单管理
  '/orderlist': {
    component: orderlist
  },
  //购物车
  'shopcart': {
    component: shopcart
  },
  // H5我的售后.psd H5我的售后-返修.psd H5我的售后－退换货.psd
  '/aftersales': {
    component: aftersalesRepair
  }, //我的客服
  '/myCustomerServices': {
    component: myCustomerServices
  },
  // 我的收藏
  '/mybookmark': {
    component: mybookmark
  },
  // 我的权利
  '/myRight': {
    component: myRight
  },
  // 我的资料
  '/myData': {
    component: myData
  }
});
router.start(App, '#app');
