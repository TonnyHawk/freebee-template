$('.navbar__menu-icon').click(function(){
   $('.navbar__menu').toggleClass('show');
});

window.addEventListener('scroll', function() {
   var blockHeight = $('#section-header').height();
   var element = document.getElementById("section-header").getBoundingClientRect();

   if($(document).scrollTop() > blockHeight){
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