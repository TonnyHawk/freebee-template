$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    responsive:{
      0:{
          items:2.5
      },
      500:{
        items: 3.5
      },
      800:{
        items: 5
      },
      850:{
        items: 6
      }
    }
   });
 });