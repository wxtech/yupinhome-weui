<template>
  <section class="wrap wrap2">
    <div class="power-box integral-box mall-box">
      <div class="vux-flex-row">
        <div class="fl" style="width:30%">
          <div class="item-box item-wid">
            <div class="flex-demo">
              <div class="flex-box flex-img flex-img-pt">
                <img slot="icon"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzQTM4NTI3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzQTM4NTM3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODNBMzg1MDdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODNBMzg1MTdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plh/1RMAAAidSURBVHja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">
                <p>积分</p>
              </div>
            </div>
            <div class="flex-demo pt">1851<b>分</b></div>
          </div>
        </div>
        <div class="fl" style="width:38%;margin-left: 8px;">
          <div class="item-box item-box-txt">
            <div class="flex-demo flex-txt">
              <div class="flex-box">
                <h3>您拥有的积分</h3>
                <p>即将过期的积分效期到</p>
                <p>2017年9月12日</p>
              </div>
            </div>
          </div>
        </div>
        <div class="fl img-box2">
          <div class="item-box item-btn">
            <div class="flex-demo">
              <div class="flex-box flex-img flex-img-pt">
                <img src="~assets/dingdan-icon05-80x80.png"/>
              </div>
              <p>积分明细</p>
            </div>
          </div>
        </div>
        <div class="fl img-box2">
          <div class="item-box item-btn">
            <div class="flex-demo">
              <div class="flex-box flex-img flex-img-pt">
                <img slot="icon"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzQTM4NTI3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzQTM4NTM3QTkzMTFFNjlDMkE4Qzc3MUZFQ0YyMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODNBMzg1MDdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODNBMzg1MTdBOTMxMUU2OUMyQThDNzcxRkVDRjIxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plh/1RMAAAidSURBVHja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">
              </div>
              <p>可换购商品</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="ad-item">
      <img src="~assets/usercenter/ad-1242x455.jpg"/>
    </div>
  </section>
  <section class="today-wrapper">
    <div class="today-title"><h4>今日推荐</h4></div>
    <div class="today-container">
      <ul>
        <li>
          <a href="javascript:;">
            <div class="today-img-container">
              <img src="~assets/order/good-sample-200x200.jpg"/>
            </div>
            <div class="today-info-container">
              <h3>多功能烤箱 GEKD 40000B</h3>
              <span class="red"><ins></ins>20000 + 5000积分</span>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div class="today-img-container">
              <img src="~assets/order/good-sample-200x200.jpg"/>
            </div>
            <div class="today-info-container">
              <h3>多功能烤箱 GEKD 40000B</h3>
              <span class="red"><ins></ins>20000 + 5000积分</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </section>
  <section>
    <div class="today-title">
      <h4>热门积分商品</h4>
      <span>查看全部</span>
    </div>
    <div class="today-container hot-container">
      <ul>
        <li><a href="javascript:;">
          <div class="today-img-container">
            <img src="~assets/order/good-sample-200x200.jpg"/>
          </div>
          <div class="today-info-container">
            <h3>多功能烤箱 GEKD 40000B</h3>
            <span class="red"><ins></ins>20000 + 5000积分</span>
          </div>
        </a></li>
        <li><a href="javascript:;">
          <div class="today-img-container">
            <img src="~assets/order/good-sample-200x200.jpg"/>
          </div>
          <div class="today-info-container">
            <h3>多功能烤箱 GEKD 40000B</h3>
            <span class="red"><ins></ins>20000 + 5000积分</span>
          </div>
        </a></li>
        <li><a href="javascript:;">
          <div class="today-img-container">
            <img src="~assets/order/good-sample-200x200.jpg"/>
          </div>
          <div class="today-info-container">
            <h3>多功能烤箱 GEKD 40000B</h3>
            <span class="red"><ins></ins>20000 + 5000积分</span>
          </div>
        </a></li>
        <li><a href="javascript:;">
          <div class="today-img-container">
            <img src="~assets/order/good-sample-200x200.jpg"/>
          </div>
          <div class="today-info-container">
            <h3>多功能烤箱 GEKD 40000B</h3>
            <span class="red"><ins></ins>20000 + 5000积分</span>
          </div>
        </a></li>
        <li><a href="javascript:;">
          <div class="today-img-container">
            <img src="~assets/order/good-sample-200x200.jpg"/>
          </div>
          <div class="today-info-container">
            <h3>多功能烤箱 GEKD 40000B</h3>
            <span class="red"><ins></ins>20000 + 5000积分</span>
          </div>
        </a></li>
        <li><a href="javascript:;">
          <div class="today-img-container">
            <img src="~assets/order/good-sample-200x200.jpg"/>
          </div>
          <div class="today-info-container">
            <h3>多功能烤箱 GEKD 40000B</h3>
            <span class="red"><ins></ins>20000 + 5000积分</span>
          </div>
        </a></li>
      </ul>
    </div>
  </section>
</template>
<style>
  .today-title span {
    float: right;
    border: 1px solid #275bab;
    color: #275bab;
    line-height: 30px;
    padding: 0px 17px;
    cursor: pointer;
  }

  .today-wrapper {
    border-bottom: 1px solid #e4e6e7;
  }

  .today-title {
    padding: 10px 12px;
    font-size: 15px;
    line-height: 30px;
    overflow: hidden;
  }

  .today-title h4 {
    font-weight: 400;
    color: #000000;
    float: left;
  }

  .today-container {
    padding: 0 7px
  }

  .today-container ul {
    list-style: none;
    overflow: hidden;
  }

  .today-container li {
    float: left;
    width: 50%;
    padding: 0 5px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }

  .hot-container li {
    width: 33.3%;
  }

  .today-info-container {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .today-container li a {
    padding: 0 5px;
    display: block;
    border: 1px solid #cccccc;
    text-align: center;
  }

  .today-img-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .today-info-container h3 {
    margin-top: 8px;
    line-height: 20px;
    font-size: 16px;
    color: #275bab;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-wid {
    width: 99px;
  }

  .mall-box .flex-img {
    width: 70%;
  }

  .wrap2 {
    overflow: hidden;
    width: 100%;

  }

  .mall-box, .mall-box .vux-flex-row {
    width: 100%;
  }

  .wrap .mall-box .vux-flex-row {
    padding-bottom: 20px;
    overflow: hidden;
  }

  .mall-box .img-box2 {
    width: 14%;
    overflow: hidden;
  }

  .mall-box .item-btn .flex-demo {
    width: 130%;
  }

  .mall-box .fl {
    float: left;
  }

  .mall-box .flex-demo {
    font-size: 14px;
    padding-top: 15%;
  }

  .mall-box .pt {
    padding-top: 38%;
  }

  .mall-box .flex-txt .flex-box {
    width: 100%;
  }

  .mall-box .flex-img-pt {
    padding-top: 24%;
  }
</style>
<script>
  export default{
    data(){
      return {}
    }
  }
</script>
