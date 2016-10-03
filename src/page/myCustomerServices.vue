<template>
  <x-header :left-options="{backText: '返回',showBack:true}">我的售后</x-header>

  <div class="my-customer-services">
    <div class="l">
      aa
    </div>
    <div class="r">aaa</div>
  </div>
</template>
<style>
  .my-customer-services{

  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      xHeader
    }
  }
</script>
