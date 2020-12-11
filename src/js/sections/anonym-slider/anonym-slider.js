$(document).ready(function(){

   var anonymSlider = $("#anonym-slider .comment-slider");
   anonymSlider.owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      autoplay: true,
   });

   // Custom Navigation Events
   $("#anonym-slider .comment-slider__btn-next").click(function(){
      anonymSlider.trigger('next.owl.carousel');
   })
   $("#anonym-slider .comment-slider__btn-prev").click(function(){
      anonymSlider.trigger('prev.owl.carousel');
   })

});
