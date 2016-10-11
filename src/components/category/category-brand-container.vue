<template>
  <section>
    <header class="j-header">
      <div class="j-header-search">
        <input value="" placeholder="请输入关键字" type="text">
        <a href="http://localhost:8080/#!/categorylist">{{searchText}}</a>
      </div>
    </header>
  </section>
  <div class="height"></div>
  <section id="categoryBody" class="category-viewport">
    <!--左边-->
    <div id="rootList" class="j-category-tab">
      <div class="category8" id="category-lf">
        <ul id="category-ul">
          <li>
            <a href="javascript:;">
              <i>A</i>
              <span>AGA</span>
              <span>ASKO</span>
              <span>ARISTON</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>B</i>
              <span>BLOMBERG</span>
              <span>BRANDT</span>
              <span>BERTAZZONI</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>C</i>
              <span>CRISTEL</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>E</i>
              <span>ELICA</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>F</i>
              <span>FHIABA</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>G</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i>A</i>
              <span>GORENJE</span>
              <span>GRUNDIG</span>
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

  #category-lf {
    position: relative;
    -webkit-transition: .3s;
    transition: .3s;
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

  #branchList {
    overflow: hidden;
    position: relative;
    top: 0px;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .j-header-search {
    padding: 10px 0;
    overflow: hidden;
  }

  .j-header .j-header-search > input {
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

  .j-header .j-header-search > a {
    float: right;
    margin-right: 12px;
    width: 30%;
    text-align: center;
    background: #275bab;
    color: #FFFFFF;
  }

  .j-header .j-category-tab a > img {
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

  .j-category-tab li:active {
    background: #265baa;
  }

  .j-category-tab li:active a {
    color: #FFFFFF;
  }

  .j-category-tab a > span {
    padding-top: 5px;
  }

  .j-category-tab a > span, .j-category-tab a > i {
    display: block;
    font-style: normal;
    font-family: Arial;
    line-height: 30px;
  }

  .j-category-tab a > i {
    color: #000000;
    font-size: 24px;
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
      return {}
    },
    computed: {},
    methods: {}

  }
</script>
