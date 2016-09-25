import Vue from 'vue'
import App from './App'
import Home from './components/home/home'
import VueRouter from 'vue-router'
import numbershipcenter from './page/numbershipcenter'

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
  }
})
router.start(App, '#app')

