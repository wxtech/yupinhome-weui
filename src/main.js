import Vue from 'vue'
import App from './App'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import numbershipcenter from './page/numbershipcenter'
import deliverMethodslist from './page/methodslist.vue'
import userregister from './page/user-registration.vue'
import userregistersuccess from './page/user-registration-success.vue'

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
  }

})
router.start(App, '#app')

