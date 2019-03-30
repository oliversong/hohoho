$(function() {
		   
    $.fn.fadeInHandler = function(speed, callback) {
		if ($.browser.msie && $.browser.version < 9) {
			$(this).show();
		} else {
			$(this).fadeIn();
		}
	};
		   
	var autoScroll = false;
	
	function moveSide() {
		var bH = $(window).height();
		var sH = $("#side").height();
		var wT = $(window).scrollTop();
		var offset = $("#side").position();
		var sO = offset.top;
		var tolerance = 10;
		
		if ((sO + sH + tolerance) > (wT + bH)) {
			// too high
			var pos = wT + bH - sH - tolerance;
			
			$('#side').stop().animate({ top: pos + "px" }, { queue: false, duration: 500, easing: 'easeInOutSine' });
		}
		
		if ((sO - tolerance) < wT) {
			// too high
			var pos = wT + tolerance;
			
			$('#side').stop().animate({ top: pos + "px" }, { queue: false, duration: 500, easing: 'easeInOutSine' });
		}
		console.log('move');
	}
	
	moveSide();
	
	$(window).scroll(function() {
		if (autoScroll == false) {
			moveSide();
		}
	});
	
	$("#side area,#blubbity").click(function() {
		autoScroll = true;
		var linkClass = $(this).attr("class");
		if ($(this).hasClass("top")) {
			var pos = 389;
		} else if ($(this).hasClass("events")) {
			var pos = 670;
		} else if ($(this).hasClass("about")) {
			var pos = 1470;
		} else if ($(this).hasClass("exec")) {
			var pos = 2080;
		} else if ($(this).hasClass("sponsors")) {
			var pos = 2750;
		} else if ($(this).hasClass("resources")) {
			var pos = 3370;
		} else if ($(this).hasClass("contact")) {
			var pos = 3830;
		}
		
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top - 25;
			$('html,body').animate({scrollTop: targetOffset}, {duration: 500 , easing: 'easeInOutSine', complete: function() {
																														   $('#side').animate({ top: pos + "px" }, 
            { queue: false, duration: 500, easing: 'easeInOutSine', complete: function() {
				autoScroll = false;
			}});
																														   }});
		   return false;
		  }
		}
	});
});