+function ($) {

    /*-------------------------------*/
    /*          Hamburger            */
    /*-------------------------------*/
    
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
    });
    
    /*-------------------------------*/
    /*           Preloade            */
    /*-------------------------------*/
        $('.navbar').hide(0).delay(2000).fadeIn(1000); //schowanie i pokazanie menu po załadowaniu preloadra
        $('#preloader-logo').fadeOut(2800); // zanikanie grafiki
        $('#preloader').delay(2000).fadeOut(3000); // zanikanie warstwy zakrywającej stronę
        $('body').delay(2800).css({'overflow':'visible'}); // dopóki #preloader jest widoczny nie ma możliwości przewijania strony
    
    /*-------------------------------*/
    /*           Google Map          */
    /*-------------------------------*/
    
    var map;
    
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
}(jQuery);


