$(document).ready(function () {
     $('.carousel.carousel-slider').carousel({
          fullWidth: true
      });

      setTimeout(autoplay, 7500);

      function autoplay() {
          $('.carousel').carousel('next');
          setTimeout(autoplay, 7500);
      }

//      $('.carousel').tooltip({
//        content: "Click to go to!"
//      });
});
