/**
 * Created by Administrator on 2016/10/1.
 */
const $ = require('jquery');
let isMove;
let tx;
let x;
let max_width;
let tag_num;
let nav_widthx;
let $height;
export default function moveObj(wrap, list) {
  // $(document).ready(function () {
  //   let $wrap = $(wrap);
  //   $height = $(wrap).css("height");
  //   // window.alert($height);
  //   tag_num = $(list).length;
  //   nav_widthx = document.body.clientHeight;
  //   max_width = (tag_num * 60 - nav_widthx + 100) * -1;
  //   $wrap.on("touchstart", touchStart);
  //   $wrap.on("touchmove", touchMove);
  //   $wrap.on("touchend", function () {
  //     isMove = false;
  //   });
  // });
  //
  // function touchStart(e) {
  //   isMove = true;
  //   e.preventDefault();
  //   tx = parseInt($(wrap).css('top'));
  //   x = e.touches[0].pageY;
  // }
  //
  // function touchMove(e) {
  //   if (isMove) {
  //     e.preventDefault();
  //     var n = tx + e.touches[0].pageY - x;
  //     if (n <= 0 && n < max_width) {
  //       $(wrap).css('top', n + 'px');
  //     }
  //     let $top = $(wrap).css("top");
  //     $top = parseInt($top.replace('px', ''));
  //     let $body = parseInt($height.replace('px', ''));
  //     if ($top !== 0 && Math.abs($top) < $body - 100 && Math.abs(x) > $body - Math.abs($top)) {
  //       $(wrap).css('top', '0px');
  //       // window.alert(1);
  //     }
  //     console.log($top + '', +x);
  //   }
  // }
}
