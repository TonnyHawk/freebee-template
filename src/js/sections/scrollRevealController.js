// let interval = 0;
// let counter = 0;
// let revealOptions = {
//    reset: false, 
//    delay: 50, 
//    duration: 1600
// };

// $(".portfolio__photo").each(function(options){
//    ScrollReveal().reveal(this, revealOptions);
//    revealOptions.delay += revealOptions.delay;
// });

$(".portfolio__photo").each(function(options){
   ScrollReveal().reveal(this, revealOptions);
   revealOptions.delay += revealOptions.delay;
});