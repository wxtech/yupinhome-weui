<template>

  <div class="vux-flexbox vux-flex-row">
    <div class="vux-flexbox-item" style="flex: 0 0 20%;">
      <img src="~assets/logo.jpg">
    </div>
    <div class="vux-flexbox-item">

    </div>
  </div>
  <swiper auto>
    <swiper-item>
      <img src="~assets/home/banner1.png"/>
    </swiper-item>
    <swiper-item>
      <img src="~assets/home/banner1.png"/>
    </swiper-item>
  </swiper>
</template>
<style scope>
  .vux-swiper img {
    max-height: 100%;
    width: 100%;
  }

  .search-input {
    border: blue solid 1px;
  }
</style>
<script>
  import swiper from 'vux/src/components/swiper'
  import swiperItem from 'vux/src/components/swiper-item'
  import flexbox from 'vux/src/components/flexbox'
  import flexboxItem from 'vux/src/components/flexbox/flexbox-item.vue'
  import xInput from 'vux/src/components/x-input'

  export default {
    components: {
      flexbox,
      flexboxItem,
      xInput,
      swiper,
      swiperItem
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
