$(document).ready(function(){
  $(".testimonials__slider").owlCarousel({
	loop:true,
	margin:0,
	items:1,
	autoplayHoverPause:true,
	dots:false,
	nav:true,
	navText:["<span class='reviews-arrow-right'></span>","<span class='reviews-arrow-left'></span>"],
	smartSpeed:1200,
	autoHeight:false,
	autoplay:false
	});
});