<template>
  <section class="wrapperH">
    <div class="webside-top bgred">
      <div class="lf">
        <div class="logo">
          <img src="~assets/logo.png">
        </div>
      </div>
      <div class="fr">
        <div class="search-section">
          <input type="text"/>
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
  </section>
  <integral-mall></integral-mall>
</template>
<style>
  .wrapperH{
    height: 55px;
    overflow: hidden;
  }
  .bgred {
    background: #ffffff;
  }
</style>
<script>
  import integralMall from 'components/Integral/Integral-mall.vue'
  export default{
    data(){

    },
    components: {
      integralMall
    }
  }
</script>
