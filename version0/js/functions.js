$(window).scroll(function () {
	var wScroll = $(window).scrollTop();

	if (wScroll < $('#carlos-profile').offset().top) {
		$('#content-background').css({
			transform: 'translateX(-'+wScroll+'px) translateY('+wScroll/4+'px) rotate('+wScroll/3+'deg)'
		})
	}

	if (wScroll > $('#carlos-profile').offset().top - 500) {
		$('#navigation-bar').addClass('nav-time');

		$('.profile-columns div').each(function (i) {
			setTimeout(function() {
				$('.profile-columns div').eq(i).addClass('is-showing');
			}, 500 * (i+1));
		})

		$('#carlos-interests').css('background-position', ''+wScroll - $('#carlos-profile').offset().top+'px');
	}

	else {
		$('#navigation-bar').removeClass('nav-time');
		$('.profile-columns div').removeClass('is-showing');
	}

});

function intro_scroll () {
	$("html, body").animate({scrollTop: $('#carlos-profile').offset().top - 100}, 1000);
}