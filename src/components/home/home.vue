<template>
  <swiper :list="list" auto>
    <swiper-item>
       <img src="../" />
    </swiper-item>
  </swiper>
</template>
<script>
  import swiper from 'vux/src/components/swiper'

  export default {
    components: {
      swiper
    },
    data: function () {
      return {
        list: [{
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
          img: '/assets/home/banner1.png',
          title: '如何手制一份秋意的茶？'
        }]
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
