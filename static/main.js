$(document).ready(function(){

  // $('.hero-slider, .culture hero-slider').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // autoplay: true,
  // speed: 1500,
  // autoplaySpeed: 5000,
  // swipe: true,
  // infinite: true,
  // arrows: false,
  // fade: true,
  // cssEase: 'linear'
  // });

  new WOW().init();

// Smooth scroll to #id

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
    }
  }
  });
});

// HAMBURGER

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
hamburger.classList.toggle("is-active");
});

  $('.hamburger').on('click', function() {
      // $('.mobile-header ul').fadeToggle('slow');
      $('.hamburger-inner').toggleClass("black");
      // $('#main').toggleClass("open-nav");

  }); 
  
var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'side': 'right',
  'tolerance': 70
});

document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
      $('.logo img').toggle();
      $('.hamburger').toggleClass('slide-left');
    });
  
  $(window).scroll(function(){
    
//  $(".text-overlay, .header, .bottom-line").css("opacity", 1 - $(window).scrollTop() / 600);
//  $("#line-path").css("opacity", 0 + $(window).scrollTop() / 1000);


  if ($(window).scrollTop() > 560) {
    $('.scroll-header').fadeIn();
  } else {
    $('.scroll-header').fadeOut();
  };

if ($(window).scrollTop() > 300) {
    $('.scroll-header-alt').fadeIn();
  } else {
    $('.scroll-header-alt').fadeOut();
  };

if ($(window).scrollTop() > 100) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  };	

if ($(window).scrollTop() > 460) {
    $('.header').fadeOut();
  } else {
    $('.header').fadeIn();
  };
      
  });
  
$(function() {
  $('#main').smoothState();
});

$("button.get-notified").click(function(event) {
  $('.email-signup').fadeToggle();
  $('.email-signup').show();
  $('.splash-hero .text-overlay').fadeToggle();
});



$('.body-container').imagesLoaded( { background: true }, function() {
  console.log('#container background image loaded');
  $('.body-container').delay(4000).show();
  $('.load').hide()
});


});


// Get a reference to the <path>
var path = document.querySelector('#line-path');

// Get length of path... ~577px in this demo
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// When the page scrolls...
window.addEventListener("scroll", function(e) {

  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - 00 );

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength + drawLength;

});

// ... at bottom of scrolling function

// When complete, remove the dash array, otherwise shape isn't quite sharp
if (scrollPercentage >= 0.99) {
path.style.strokeDasharray = "none";
} else {
path.style.strokeDasharray = pathLength + ' ' + pathLength;
}