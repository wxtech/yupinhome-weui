<template>
  <section class="wrap wrap2">
    <div class="power-box integral-box">
      <div class="vux-flexbox vux-flex-row">
        <div class="vux-flexbox-item" style="margin-left: 8px;">
          <div class="item-box">
            <div class="flex-demo">
              <div class="flex-box flex-img">
                <img slot="icon"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzQTM4NTI3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzQTM4NTM3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODNBMzg1MDdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODNBMzg1MTdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plh/1RMAAAidSURBVHja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">
                <p>积分</p>
              </div>
            </div>
            <div class="flex-demo">1851<b>分</b></div>
          </div>
        </div>
        <div class="vux-flexbox-item" style="margin-left: 8px;">
          <div class="item-box item-box-txt">
            <div class="flex-demo flex-txt">
              <div class="flex-box wdate">
                <h3>您拥有的积分</h3>
                <p>即将过期的积分效期到</p>
                <p>2017年9月12日</p>
              </div>
            </div>
          </div>
        </div>
        <div class="vux-flexbox-item" style="margin-left: 8px;">
          <div class="item-box item-btn">
            <div class="flex-demo">
              <div class="flex-box">
                <button>立刻使用</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="detail-list">
    <dl>
      <dt>购物抵扣－订单编号2132312312312</dt>
      <dd><span class="mr">22015-09-12</span><span class="green score">-2000</span></dd>
    </dl>
    <dl>
      <dt>购物抵扣－订单编号2132312312312</dt>
      <dd><span class="mr">22015-09-12</span><span class="red score">+2000</span></dd>
    </dl>
  </section>
  <div class="view-all">
    没有更多信息了
  </div>
</template>
<style>
  .detail-list {
    border-top: 1px solid #e4e6e7;
  }

  .mr {
    margin-right: 20px;
  }

  .detail-list dl {
    border-bottom: 1px solid #e1e1e1;
    padding: 15px 25px;
    width: 100%;
    text-align: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }

  .detail-list dl dt {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: inline-block;
    width: 50%;
    white-space: nowrap;
    float: left;
    color: #6f6f6f;
    margin-right: 16px;
    font-size: 13px;
  }

  .detail-list dl dd {
    float: left;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #6f6f6f;
    font-size: 13px;
    overflow: hidden;
  }

  .detail-list .dd .mr {
    text-align: left;
  }
  .detail-list .score {
    text-align:right;
    float:right;
  }

  .green {
    color: #6af87a;

  }

  .wrap2 {
    margin-top: 0px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 10px;
  }

  .integral-box .flex-demo:nth-child(3), .integral-box .flex-box {
    width: auto;
  }

  .integral-box .flex-img {
    width: 70%;
  }

  .integral-box .flex-box h3 {
    font-size: 15px;
    padding-bottom: 6px;
    color: #275bab;
    font-weight:normal;
    margin-top:10px;
  }

  .integral-box .flex-demo:nth-child(1) {
    width: 48px;
  }

  .integral-box .flex-txt:nth-child(3) {
    width: auto;
  }

  .integral-box .flex-txt:nth-child(1) {
    width: auto;
  }

  .integral-box .flex-txt .flex-box {
    text-align: left;
    width: 127%;
  }

  .integral-box .vux-flexbox-item:nth-child(1) {
    border: none;
  }

  .integral-box .vux-flexbox-item .item-box {
    overflow: auto;
  }

  .integral-box .vux-flexbox-item .item-box-txt {
    width: 127%;
  }

  .integral-box .flex-box p {
    font-size: 12px;
    color: #265baa;
  }

  .integral-box .flex-box button {
    border: none;
    background: #275bab;
    color: #ffffff;
    padding: 10px 0;
    width: 70px;
  }

  .integral-box .item-btn .flex-demo {
    width: 70px;
  }

  .integral-box .vux-flexbox-item .item-btn {
    width: 70px;
  }

  .integral-box .wdate p {
    color:#a7a7a7;
  }

  .item-btn {
    width: 70%;
  }

  .integral-box .vux-flexbox-item:nth-child(1) .flex-demo:nth-child(2) {
    font-size: 16px;
    padding-top: 22%;
  }
</style>
<script>
  export default{}
</script>
