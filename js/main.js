var $btnshowhide = $('.btn-show-hide');
var $box = $('.box');

var $btnmove = $('.btn-move');
var $diamond = $('.diamond');

// var $btnce = $('.btn-collapse-expand');
// var $panel = $('.panel');

// var $btnbounce = $('.btn-bounce');
// var $circle = $('.circle');

// var $btnappend = $('.btn-append');
// var $list = $('.list');

$btnshowhide.on('click', function() {
  $box.toggleClass('show-box')
});

$btnmove.on('click', function() {
  $diamond.toggleClass('')
});
