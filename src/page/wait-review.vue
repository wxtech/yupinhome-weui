<template>
  <!--调用头部公共组件-->
  <header class="navbar navbar2">
    <nav-box :header-title="headerTitle">
    </nav-box>
  </header>
  <wait-review></wait-review>
  <user-footer></user-footer>
</template>
<style>
</style>
<script>
  import waitReview from 'components/user/wait-review-page.vue'
  import navBox from 'components/user/header-title.vue'
  import userFooter from 'components/user/user-footer.vue'

  export default{
    data(){
      return {
        headerTitle: '等待审核'
      }
    },
    components: {
      waitReview,
      navBox,
      userFooter
    }
  }
</script>
