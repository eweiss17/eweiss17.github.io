$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.collapsible').collapsible();

    var shiftWindow = function () {
        scrollBy(0, -50)
    };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);
});
