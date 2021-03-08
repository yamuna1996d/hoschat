/*
** ---------------------------------------------------------------------------------------
*  Theme Name: Ualright
*  Description: Agency & Portfolio
*  Author URI: https://webcastletech.com/
*  Version: 1.0
** ---------------------------------------------------------------------------------------
 */


/**
* --------------------------------------------------------------------------------------
* Scrollbar
* --------------------------------------------------------------------------------------
*/

$(window).on("load", function () {
    $(".js-chat-scroller").mCustomScrollbar({
        theme: "minimal-dark"
    });
});


$(document).ready(function () {

    /**
 * --------------------------------------------------------------------------------------
 * Wow
 * --------------------------------------------------------------------------------------
 */
    new WOW().init();

    /**
     * --------------------------------------------------------------------------------------
     * Navbar Active Link
     * --------------------------------------------------------------------------------------
     */

    jQuery(function ($) {
        var path = window.location.href;
        $('.navbar .navbar-nav li a').each(function () {
            if (this.href === path) {
                $(this).parent().addClass('active');
            }
        });
    });

    /**
     * --------------------------------------------------------------------------------------
     * Counter UP
     * --------------------------------------------------------------------------------------
     */
    $('.js-counter').countUp({
        delay: 50,
        time: 1500,
        useEasing: true,
    });

    /**
     * --------------------------------------------------------------------------------------
     * Nice Select
     * --------------------------------------------------------------------------------------
     */

    $('.js-select').niceSelect();

    /**
     * --------------------------------------------------------------------------------------
     * Date Picker
     * --------------------------------------------------------------------------------------
     */

    $('.js-input-date').datepicker({
        autoclose: true,
        today: true,
        format: 'dd/mm/yyyy'
    });

    $(".js-year-picker").datepicker({
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years",
        autoclose: true,
    });

    /**
     * --------------------------------------------------------------------------------------
     * Input Focus
     * --------------------------------------------------------------------------------------
     */
    $('.js-input-field').on('blur', function () {
        $(this).parent().removeClass('input-focus--active').addClass('input-focus');
    }).on('focus', function () {
        $(this).parent().removeClass('input-focus').addClass('input-focus--active');
    });

    /**
     * --------------------------------------------------------------------------------------
     * Select 2
     * --------------------------------------------------------------------------------------
     */
    $('.js-select-single').select2();

    $('.js-select-multiple').select2();



    /**
     * --------------------------------------------------------------------------------------
     * Chat Bot
     * --------------------------------------------------------------------------------------
    */

    $('.js-chat-bubble').click(function (e) {
        e.preventDefault();
        $('.qk-chatbot').toggleClass('bot-active');
    });
    $('.js-chat-close').click(function (e) {
        e.preventDefault();
        $('.qk-chatbot').removeClass('bot-active');
    });






    /**
      * --------------------------------------------------------------------------------------
      * Slider
      * --------------------------------------------------------------------------------------
      **/


    var testimonialThumb = new Swiper('.testimonial-thumbs', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        freeMode: true,
        loopedSlides: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        fadeEffect: {
            crossFade: true
        },
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
            swiper: testimonialMain
        }
    });

    var testimonialMain = new Swiper('.testimonial-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,
        pagination: {
            el: '.js-pagination',
            clickable: true
        },
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        effect: "fade",
        thumbs: {
            swiper: testimonialThumb
        }
    });

    /**
     * --------------------------------------------------------------------------------------
     * Team Slider
     * --------------------------------------------------------------------------------------
     */
    var teamSliderJs = new Swiper('.js-team-slider', {
        spaceBetween: 30,
        parallax: true,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.js-slide-next',
            prevEl: '.js-slide-prev',
        },
    });

    /**
     * --------------------------------------------------------------------------------------
     * Feedback
     * --------------------------------------------------------------------------------------
     */
    var feedbackSliderJs = new Swiper('.js-patient-slider', {
        spaceBetween: 30,
        parallax: true,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.js-slide-next',
            prevEl: '.js-slide-prev',
        },
    });


});


/**
 * --------------------------------------------------------------------------------------
 * Rating Star - org and experience
 * --------------------------------------------------------------------------------------
 */

$(function () {
    $('.js-rating-icon').click(function () {
        var clickedId = $(this).data('star');
        $('.js-rating-icon').removeClass('rating-active');
        $('.js-rating-icon').each(function () {
            if ($(this).data('star') <= clickedId) {
                var star = $(this);
                setTimeout(function () {
                    star.addClass('rating-active');
                }, 75 * parseInt($(this).data('star')));
            }
        });
        $('.btn').removeClass('disabled');
    });

    $('.btn').click(function (e) {
        e.preventDefault();
        $(this)
            .unbind('click')

    });
});


$(function () {
    $('.js-rating-exp').click(function () {
        var clickedId = $(this).data('star-icon');
        $('.js-rating-exp').removeClass('r-active');
        $('.js-rating-exp').each(function () {
            if ($(this).data('star-icon') <= clickedId) {
                var star = $(this);
                setTimeout(function () {
                    star.addClass('r-active');
                }, 75 * parseInt($(this).data('star-icon')));
            }
        });
        $('.btn').removeClass('disabled');
    });

    $('.btn').click(function (e) {
        e.preventDefault();
        $(this)
            .unbind('click')

    });
});

/**
 * --------------------------------------------------------------------------------------
 * OTP
 * --------------------------------------------------------------------------------------
 */
let digitValidate = function (tabswitcher) {
    console.log(tabswitcher.value);
    tabswitcher.value = tabswitcher.value.replace(/[^0-9]/g, '');
}

let tabChange = function (val) {
    let tabswitcher = document.querySelectorAll('input.otp-input');
    if (tabswitcher[val - 1].value != '') {
        tabswitcher[val].focus()
    } else if (tabswitcher[val - 1].value == '') {
        tabswitcher[val - 2].focus()
    }
}


/**
 * --------------------------------------------------------------------------------------
 * Image Preview
 * --------------------------------------------------------------------------------------
 */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.js-thumbPreview')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
