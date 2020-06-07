"use strict";

(function($) {
	
    // chiusura del menù ad hamburger al momento 
	// in cui viene cliccato un link
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
  
    // attivazione dello scrollspy di bootstrap
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
  
    // contrarre la navbar se l'offset rispetto
	// alla parte superiore della pagina è
	// maggiore di 100
    let navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
	
})(jQuery);
  