// SEARCH INPUT
$(function () {

    $('.nav-icons-search').click(function() {
        $('.nav-search').toggleClass('open');
    });
    
});

// SLIDER
$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear'
    });
    $('.testimonial-slider').slick({
        dots: true,
        speed: 800
    });
});

// SCROLL
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    };
});

// MENU
$(document).ready(function () {

    $('.menu-link').click(function() {
        $(this).toggleClass('menu-link-active');
        $('.menu').toggleClass('menu_active');
    });
    $('.menu-link a').click(function() {
        $(this).toggleClass('menu_active');
    });

});


// TABS
$(".tab_item").not(":first").hide();
$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// scrollTopBtn
$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 40){
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    })

    $('.topBtn').click(function() {
        $('html, body').animate({scrollTop: 0},500);
    });
});



$('.scrollToSec').click(function () {
    let getElement = $(this).attr('href');
    if ($(getElement).length) {
      let getOffset = $(getElement).offset().top;

      $('.nav-menu').removeClass('menu_active');
      $('.menu-link').removeClass('menu-link-active');
      $('html,body').animate({
        scrollTop:getOffset
      },400);
    }
    return false;
});