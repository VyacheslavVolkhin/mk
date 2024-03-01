$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


	//tiles-slider-box
	if (!!$('.tiles-slider-box').offset()) {
		$('.tiles-slider-box .slider').slick({
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			touchThreshold: 100,
			variableWidth: false,
			infinite: true,
			adaptiveHeight: true,
			rows: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: '<span class="btn-action-ico btn button-border ico-arrow ico-arrow-prev"></span>',
			nextArrow: '<span class="btn-action-ico btn button-border ico-arrow ico-arrow-next"></span>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
					}
				},
			]
		});
		
	}
});


