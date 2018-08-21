define('scroll_to_top', ['jquery'], function ($) {
	
	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	var debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
	
	$(document).on('click', '#scroll_to_top', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: '0px'});
	});
	
	$(document).on('scroll', 
		debounce(function() {
			if ($(document).scrollTop() > 1000) {
		        $('#scroll_to_top').show();
		    } else {
				$('#scroll_to_top').hide();
		    }
		}, 250)
	);
});
require(['scroll_to_top']);
