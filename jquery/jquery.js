/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
// Parallaxing + add class active on scroll
    $(document).scroll(function () {
  
        // parallaxing
        var $movebg = $(window).scrollTop() * -0.3;
        $('.hallo').css('background-positionY', ($movebg) + 'px');
    });
    
    
    
//Collapse nav on mobile
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    
    
//SMOOTH SCROLL TO ANCHOR
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 86});

    // Add smooth scrolling on all links inside the navbar
    $(".navbar a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash,
                navHeight = $('nav').outerHeight();

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html,body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 2000);
            return false;
        } // End if
    });
    

//ADD NAV SHADOW
    $(window).scroll(function () {
        var start_change = $('#change-it-now'),
            offset = start_change.offset();
        
        if ($(window).scrollTop() > (0,window.innerHeight / 2)) {
            $('.navbar').addClass('header-shadow');
        } else {
            $('.navbar').removeClass('header-shadow');
        }
    });
    
    
//POPOVER
    $('[data-toggle="popover"]').popover();
    
    
//FADE IN DIVS
    function fade() {
        var animation_height = $(window).innerHeight() * 0.40, 
            ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.hideme').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.1s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.hideme').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});