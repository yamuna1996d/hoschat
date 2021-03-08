/*
** ---------------------------------------------------------------------------------------
 *
 *  Theme Name: Ualright
 *  Description: Agency & Portfolio
 *  Author URI: https://webcastletech.com/
 *  Version: 1.0
** ---------------------------------------------------------------------------------------
 */

$(document).ready(function () {


  /**
  * --------------------------------------------------------------------------------------
  * Slider
  * --------------------------------------------------------------------------------------
  **/
  "use strict";

  var testSlider = new Swiper('.testimonial-thumbs', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    loopedSlides: 5,
    //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    fadeEffect: {
      crossFade: true
    },
    // speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    effect: "fade",
    pagination: {
      el: '.js-pagination',
      clickable: true
    },
    thumbs: {
      swiper: galleryTop
    }
  });
  var galleryTop = new Swiper('.testimonial-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5,
    //looped slides should be the same
    // speed: 1500,
    pagination: {
      el: '.js-pagination',
      clickable: true
    },
    thumbs: {
      swiper: testSlider
    },
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    effect: "fade"
  });


});