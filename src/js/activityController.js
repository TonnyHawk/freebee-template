$(document).ready(function(){
   $('.activity').click(function(){
      $(this).find('.activity__body').slideToggle();
      $(this).toggleClass('open');
   });
});