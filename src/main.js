import Vue from 'vue'
import App from './App'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import numbershipcenter from './page/numbershipcenter'
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
  // H5我的售后.psd H5我的售后-返修.psd H5我的售后－退换货.psd
  '/aftersales': {
    component: aftersalesRepair
  },
  '/myCustomerServices': {
    component: myCustomerServices
  }

})
router.start(App, '#app')

