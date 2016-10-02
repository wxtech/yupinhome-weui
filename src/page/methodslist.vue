<template>
  <x-header :left-options="{backText: '返回',showBack:true}">配送方式配送方式</x-header>
  <div class="weui_cells">
    <div class="weui_cell">
      <div class="weui_cell_bd weui_cell_primary">
        <p>物流</p>
      </div>
      <div class="weui_cell_ft with_arrow">
      </div>
    </div>
  </div>
  <div class="weui_cells">
    <div class="weui_cell">
      <div class="weui_cell_bd weui_cell_primary">
        <p>自提</p>
      </div>
      <div class="weui_cell_ft with_arrow">
      </div>
    </div>
  </div>
  <div class="weui_cells">
    <div class="weui_cell">
      <div class="weui_cell_bd weui_cell_primary">
        <p>另约</p>
      </div>
      <div class="weui_cell_ft with_arrow">
      </div>
    </div>
  </div>

  <div class="text-center text-center-logo">
    <img src="~assets/logo.png">
  </div>
</template>
<style scope>
  .vux-header {
    background-color: #fff !important;
    color: #265baa;
  }

  .vux-header .vux-header-title, .vux-header h1 {
    color: #265baa !important;
  }

  .vux-header .vux-header-left .vux-header-back, .vux-header .vux-header-left .vux-header-back:before {
    color: #265baa;
  }

  .text-center {
    text-align: center;
  }

  .text-center-logo img {
    width: 30%;
    padding-top:15px;
  }
</style>
<script>
  import xHeader from 'vux/src/components/x-header'
  import group from 'vux/src/components/group'
  import cell from 'vux/src/components/cell'
  export default {
    components: {
      xHeader,
      group,
      cell
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>
