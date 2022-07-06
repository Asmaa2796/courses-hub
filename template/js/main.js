/*global $*/
$(function () {
    "use strict";
    
    $('.navbar .nav-link[data-scroll]').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('.' + $(this).data('scroll')).offset().top - 70
        }, 900);
    });

    $('footer .links a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
        }, 900);
    });


    // scroll up
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
          $('.scroll_up').fadeIn(500);
          $('.navbar').addClass('fixed-top');
        } else {
          $('.scroll_up').fadeOut(500);
          $('.navbar').removeClass('fixed-top');
        }
    });
    $('.scroll_up').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

 

    function validateEmail($email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test($email);
    }

    var cleanError = (function(){
        $(".has_error").removeClass("has_error").css('border', 'solid 2px green');
        $(".error_message").remove();
    });
    
    var showError = (function(Element,Message){
        Element.after( "<p class=\"error_message text-danger\" style=\"padding:10px 20px 3px 20px;font-size:13px\" >"+Message+"</p>" );
        Element.focus();
        Element.addClass("has_error");
        Element.css('border', 'solid 2px red');
    });

    $('#test').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        rtl:true,
        autoplaySpeed: 1400,
        navText: [
            '<i class="fas fa-arrow-right"></i>',
            '<i class="fas fa-arrow-left"></i>',
          ],
        navSpeed: 1400,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


});
