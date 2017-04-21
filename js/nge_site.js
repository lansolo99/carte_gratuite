'use strict';

$(function() {

	// Fix the CTA on scroll
	var cta = $(".nge_bottom-cta");
	var classState = 'nge_bottom-cta-static';
	var menuOffset = $('.nge_options-cta').offset().top;

	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();

		if (scrollPosition > menuOffset) {
			cta.removeClass(classState);
		} else {
			cta.addClass(classState);
		}
	});

})