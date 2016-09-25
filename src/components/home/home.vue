<template>
  <slider></slider>
</template>

<script>
  import slider from '../slider/slider.vue'
  export default {
    components: {
      slider
    },
    data () {
      return {
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
