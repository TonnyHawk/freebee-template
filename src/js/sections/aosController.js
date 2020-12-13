AOS.init({
   // Global settings:
   disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 200, // offset (in px) from the original trigger point
   delay: 150, // values from 0 to 3000, with step 50ms
   duration: 1000, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
   mirror: true
 
 });