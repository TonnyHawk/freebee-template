$(document).ready(function(){

   var hasAuthorSlider = $("#has-author-slider .comment-slider");
   hasAuthorSlider.owlCarousel({
      loop: true,
      items: 1,
      dots: false,
   });

   // Custom Navigation Events
   $("#has-author-slider .comment-slider__btn-next").click(function(){
      hasAuthorSlider.trigger('next.owl.carousel');
   })
   $("#has-author-slider .comment-slider__btn-prev").click(function(){
      hasAuthorSlider.trigger('prev.owl.carousel');
   })

});
