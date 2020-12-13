$('.navbar__menu-icon').click(function(){
   $('.navbar__menu').toggleClass('show');
});

window.addEventListener('scroll', function() {
   var blockHeight = $('#section-header').height();
   var element = document.getElementById("section-header").getBoundingClientRect();

   if($(document).scrollTop() > 30){
		if($('#topmenu').hasClass('fixed') == false){
			$('#topmenu').addClass('fixed');
		}
   }
   else{
		if($('#topmenu').hasClass('fixed')){
			$('#topmenu').removeClass('fixed');
		}
   }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   $('.navbar__menu-items a').click(function(){
      $('.navbar__menu').removeClass('show');
   });
}