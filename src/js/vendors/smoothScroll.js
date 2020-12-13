//smooth scroling for the anchor links
$(document).ready(function(){
	var doc_h = $(window).height();
	var doc_w = $(window).width();
	var percents = 0; //distance from element to top after scroll (in percents)

	//style for the mobile devices
	//
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
		if(doc_w < 1000){
			percents = 7;
		}
	}

	$('a[href^="#"]').click(function(){
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		var scrollCoord = $(target).offset().top - percents*doc_h/100;
		$('html, body').animate({scrollTop: scrollCoord}, 400);
		return false;
	});
});