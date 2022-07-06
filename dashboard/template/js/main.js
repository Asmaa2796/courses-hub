/*global $*/
$(function () {
  "use strict";

  $(".navbar .nav-link[data-scroll]").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("." + $(this).data("scroll")).offset().top - 70,
      },
      900
    );
  });

  $("footer .links a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 70,
      },
      900
    );
  });

  // scroll up
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".scroll_up").fadeIn(500);
    } else {
      $(".scroll_up").fadeOut(500);
    }
  });
  $(".scroll_up").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".links ul li").click(function () {
    // $(this).addClass('active').siblings().removeClass('active');
    $("." + $(this).data("menu")).slideToggle();
    $(".drop-link")
      .not("." + $(this).data("menu"))
      .slideUp();
  });

  $('.notify button').click(function(event) {
    event.stopPropagation();
    $('.notify-menu').toggle();
  });

  $(".notify-menu").on("click", function(event) {
    event.stopPropagation();
  });

  $(document).on("click", function() {
    $(".notify-menu").hide();
  });
  
  function validateEmail($email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test($email);
  }

  var cleanError = function () {
    $(".has_error").removeClass("has_error").css("border", "solid 2px green");
    $(".error_message").remove();
  };

  var showError = function (Element, Message) {
    Element.after(
      '<p class="error_message text-danger" style="padding:10px 20px 3px 20px;font-size:13px" >' +
        Message +
        "</p>"
    );
    Element.focus();
    Element.addClass("has_error");
    Element.css("border", "solid 2px red");
  };

  $(window).width(function () {
    if ($(window).width() >= 768) {
      $(".bars .open").click(function () {
        $(".side-navbar").css("left", "-250px");
        $(".bars").css("left", "20px");
        $(".bars .open").hide();
        $(".bars .closenav").show();
        $(".content-wrapp").css("margin-left", "0px");
      });
      $(".bars .closenav").click(function () {
        $(".side-navbar").css("left", "0px");
        $(".bars").css("left", "20%");
        $(".bars .open").show();
        $(".bars .closenav").hide();
        $(".content-wrapp").css("margin-left", "222px");
      });
    } else {
      $(".side-navbar").css("left", "-250px");
      $(".bars").css("left", "20px");
      $(".bars .open").hide();
      $(".bars .closenav").show();
      $(".bars .open").click(function () {
        $(".side-navbar").css("left", "-250px");
        $(".bars").css("left", "20px");
        $(".bars .open").hide();
        $(".bars .closenav").show();
      });
      $(".bars .closenav").click(function () {
        $(".side-navbar").css("left", "0px");
        $(".bars").css("left", "68%");
        $(".bars .open").show();
        $(".bars .closenav").hide();
      });
    }
  });
});
