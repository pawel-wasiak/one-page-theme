$(document).ready(function() {
'use strict';
	
	var $btOpener = $(".bt-opener"),
		$btCloser = $(".bt-closer"),
		$menu = $(".menu");

	$btOpener.click(function(event) {
		event.preventDefault();
		$menu.addClass('menu-open');
		$(this).addClass('bt-hidden');
		$btCloser.removeClass('bt-hidden');

		$btCloser.click(function(event) {
			event.preventDefault();
			$menu.removeClass('menu-open');
			$(this).addClass('bt-hidden');
			$btOpener.removeClass('bt-hidden');
		});
	});

});

$(document).ready(function() {

	var $title = $(".random-titles .random-title");
	var number = -1;

	function changeTitle()
	{
		$title.removeClass('active fadeInRight');

		number++;
		if(number > 3)
		{
			number = 0;
		}

		$title.eq(number).addClass('active fadeInRight');
		setTimeout(changeTitle, 3000);
	}

	changeTitle();

});