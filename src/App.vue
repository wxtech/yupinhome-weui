<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
  img {
    max-height: 100%;
    max-width: 100%;
  }

  body {
    font-size: 12px;
    font-family: normal;
  }

  i, em, a, strong, span {
    display: inline-block;
  }

  .ad img {
    width: 100%;
  }

  .ad {
    margin-bottom: 50px;
  }

  .weui_tabbar {
    position: fixed !important;
  }


</style>
<style lang="less">
  @import '~vux/src/styles/reset';

  body {
    line-height: normal;
  }
</style>
