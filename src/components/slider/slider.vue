<template>
  <div>
    <swiper :list="list" auto></swiper>
  </div>
</template>
<style>
  body {
    background: red;
  }
</style>
<script>
  import swiper from 'vux/dist/components/swiper'
  export default {
    components: {
      swiper
    },
    data: function () {
      return {
        list: [{
          url: '~assets/home/banner1.png',
          img: '~assets/home/banner1.png',
          title: '如何手制一份秋意的茶？'
        }, {
          url: '~assets/home/banner1.png',
          img: '~assets/home/banner1.png',
          title: '如何手制一份秋意的茶？'
        }, {
          url: '~assets/home/banner1.png',
          img: '~assets/home/banner1.png',
          title: '如何手制一份秋意的茶？'
        }]
      }
    }
  }
</script>
