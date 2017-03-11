+function ($) {

    /*-------------------------------*/
    /*          Hamburger            */
    /*-------------------------------*/
    
    
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();      
    });

    function hamburger_cross() {

        if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
    
    /*-------------------------------*/
    /*           Preloade            */
    /*-------------------------------*/
    
        $('#preloader-logo').fadeOut(2800); // zanikanie grafiki
        $('#preloader').delay(2000).fadeOut(3000); // zanikanie warstwy zakrywającej stronę
        $('body').delay(2800).css({'overflow':'visible'}); // dopóki #preloader jest widoczny nie ma możliwości przewijania strony
    
}(jQuery);
