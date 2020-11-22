$(document).ready(function(){
   $('.activity__header').click(function(){
      $(this).parent().find('.activity__body').slideToggle();
      $(this).parent().toggleClass('open');
   });
});