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
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({

  '/': {
    component: Home
  },

  '/numbershipcenter': {
    component: numbershipcenter
  },

  '/deliver-methodslist': {
    component: deliverMethodslist
  },

  '/userregister': {
    component: userregister
  },

  '/userregistersuccess': {
    component: userregistersuccess
  },

  '/userforgotpass': {
    component: userforgotpass
  },

  '/userresetpass': {
    component: userresetpass
  },

  '/userresetsuccess': {
    component: userresetsuccess
  },
  '/securitycenter': {
    component: securitycenter
  },
  '/categorylist': {
    component: categorylist
  },
  '/categorybrand': {
    component: categorybrand
  },
  '/categorysearch': {
    component: categorysearch
  },
  '/goodsdetail': {
    component: goodsdetail
  }
})
router.start(App, '#app')

