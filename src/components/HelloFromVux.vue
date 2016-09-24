<template>
  <div class="vux-demo">
    <img class="logo" src="../assets/vux_logo.png">
    <h1>{{ msg }}</h1>
  </div>
  <group>
    <calendar title="Date Picker"></calendar>
    <xnumber title="Number" :value=0 :min=0 :max=10 @on-change="change"></xnumber>
  </group>

  <tabbar>
    <tabbaritem><img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
      <span slot="label">Wechat</span></tabbaritem>
    <tabbaritem><img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
      <span slot="label">Wechat</span></tabbaritem>
    <tabbaritem><img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
      <span slot="label">Wechat</span></tabbaritem>
  </tabbar>
</template>

<script>
  import Group from 'vux/src/components/group'
  import calendar from 'vux/src/components/calendar'
  import xnumber from 'vux/src/components/x-number'
  import tabbar from 'vux/src/components/tabbar/tabbar.vue'
  import tabbaritem from 'vux/src/components/tabbar/tabbar-item.vue'

  export default {
    components: {
      Group,
      calendar,
      xnumber,
      tabbar,
      tabbaritem
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    methods: {
      change () {

      }
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
