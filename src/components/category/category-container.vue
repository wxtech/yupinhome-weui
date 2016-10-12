<template>

  <header class="j-header">
    <div class="j-header-search">
      <input value="" placeholder="请输入关键字" type="text">
      <a href="http://localhost:8080/#!/categorybrand">{{searchText}}</a>
    </div>
  </header>
  <section id="categoryBody" class="category-viewport">
    <!--左边-->
    <div id="rootList" class="j-category-tab">
      <div class="category8 mCustomScrollbar">
        <ul id="category-ul">
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>食物保鲜</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>厨房家电</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>衣服呵护</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>生活家电</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>品味生活</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>厨房五金设备</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>炊具用品</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="icon"></i>
              <span>户外用品</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--右边-->
    <div class="j-category-content">
      <div id="branchScroll" class="j-category-content-wrapper">
        <div id="branchList">
          <div class="j-category-third-promotion">
            <a href="javascript:;"><img slot="icon" src="~assets/category/cat-ad-912x438.jpg"></a>
          </div>
          <div class="j-category-div">
            <ul>
              <li><a href="javascript:;">
                <img slot="icon" src="~assets/category/sub-cat-img01-438x326.jpg">
                <span>冰箱</span>
              </a>
              </li>
              <li><a href="javascript:;">
                <img slot="icon" src="~assets/category/sub-cat-img01-438x326.jpg">
                <span>冰箱</span>
              </a>
              </li>
              <li><a href="javascript:;">
                <img slot="icon" src="~assets/category/sub-cat-img01-438x326.jpg">
                <span>冰箱</span>
              </a>
              </li>
              <li><a href="javascript:;">
                <img slot="icon" src="~assets/category/sub-cat-img01-438x326.jpg">
                <span>冰箱</span>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<style>
  section {
    margin-bottom: 0;
  }

  .j-header {
    background-color: #FFF;
    position: relative;
    width: 100%;
    z-index: 2;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: 0 0 2px #d9d9d9;
    overflow: hidden;
  }

  .j-header-search {
    padding: 10px 0;
    overflow: hidden;
  }

  .j-header-search > input {
    width: 60%;
    border: 1px solid #275bab;
    height: 30px;
    overflow: hidden;
    background: #fff;
    font-size: 12px;
    float: left;
    margin-left: 12px;
    padding-left: 10px;
  }

  .j-header-search > a {
    float: right;
    margin-right: 12px;
    width: 30%;
    text-align: center;
    background: #275bab;
    color: #FFFFFF;
  }

  .j-category-tab a > img {
    display: block;
    width: 43%;
    height: auto;
    margin: auto;
  }

  .j-header-search > a, .j-header-search > input {
    box-sizing: border-box;
    line-height: 30px;
  }

  .category-viewport {
    height: auto;
    min-height: 100%;
    background: none;
    overflow: hidden;
  }

  .j-category-tab {
    float: left;
    border-right: 1px solid #cccccc;
    height: auto;
    overflow-y: auto;
    box-sizing: border-box;
    min-height: 100%;
  }

  .j-category-content {
    height: auto;
    min-height: 100%;
    width: 100%;
    font-size: 12px;
    color: #252525;
    background-color: #f3f5f7;
  }

  .j-category-content-wrapper {
    margin-left: 100px;
  }

  .j-category-third-promotion {
    margin: 10px 7px 0 7px;
  }

  .category-viewport ul, .category-viewport li {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .j-category-tab ul {
    width: 100px;
    position: relative;
    left: 0;
    height: 100%;
    bottom: 0;
    right: 0;
    top: 0px;
    overflow: hidden;
    -webkit-transition: .3s;
    transition: .3s;

  }

  .j-category-tab li {
    padding: .1rem 0;
    background: #FFFFFF;
    text-align: center;
    position: relative;
  }

  .j-category-tab a {
    display: block;
    width: 100%;
    text-decoration: none;
    font-size: 0.22rem;
    color: #232326;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #265baa;
    position: relative;
    text-align: center;

  }

  .j-category-tab i.icon {
    display: block;
    width: 40px;
    height: 40px;
    padding: 0 !important;
    margin: auto;
    transition: .3s;
    background-position: 0px 0px;
    background: url("~assets/category/goodscat-icon.png") no-repeat;
    background-size: cover;
  }

  .j-category-tab li:nth-child(1) i.icon {
    background-position: 8px 4px;
  }

  .j-category-tab li:nth-child(2) i.icon {
    background-position: 8px -67px;
  }

  .j-category-tab li:nth-child(3) i.icon {
    background-position: 8px -135px;
  }

  .j-category-tab li:nth-child(4) i.icon {
    background-position: 8px -212px;
  }

  .j-category-tab li:nth-child(5) i.icon {
    background-position: 3px -304px;
  }

  .j-category-tab li:nth-child(6) i.icon {
    background-position: 3px -370px;
  }

  .j-category-tab li:nth-child(7) i.icon {
    background-position: 3px -444px;
  }

  .j-category-tab li:nth-child(8) i.icon {
    background-position: 3px -524px;
  }

  .j-category-tab li:active {
    background: #265baa;
  }

  .j-category-tab li:active a {
    color: #FFFFFF;
  }

  .j-category-tab li:nth-child(1):active .icon {
    background-position: 8px -35px;
  }

  .j-category-tab li:nth-child(2):active .icon {
    background-position: 8px -99px;
  }

  .j-category-tab li:nth-child(3):active .icon {
    background-position: 8px -170px;
  }

  .j-category-tab li:nth-child(4):active .icon {
    background-position: 8px -254px;
  }

  .j-category-tab li:nth-child(5):active .icon {
    background-position: 3px -332px;
  }

  .j-category-tab li:nth-child(6):active .icon {
    background-position: 3px -407px;
  }

  .j-category-tab li:nth-child(7):active .icon {
    background-position: 3px -482px;
  }

  .j-category-tab li:nth-child(8):active .icon {
    background-position: 3px -565px;
  }

  .j-category-tab a > span {
    padding-top: 5px;
  }

  .j-category-div {
    margin: 10px 0px 0 0px;
  }

  .j-category-div ul li {
    width: 45.7%;
    float: left;
    text-align: center;
    margin: 0 2% 2% 2%;
    border: 1px solid #cccccc;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .j-category-div ul li a {
    padding-top: 10px;
    background: #FFFFFF;
    color: #275bab;
  }

  .j-category-div ul li a span {
    line-height: 25px;
  }

</style>
<script>
  export default{
    props: {
      searchText: String
    },
    data () {
      return {
        demo: '食物保鲜',
        list: [
          '食物保鲜', '厨房家电', '衣服呵护', '生活家电', '品味生活', '厨房五金设备', '炊具用品', '户外用品'
        ]
      }
    }

  }
</script>
