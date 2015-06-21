$(document).ready(function() {

    /*---------------------------------------*/
    /*  STICKY NAVBAR
     /*---------------------------------------*/
    $('.navbar.navbar-fixed-top').sticky({topSpacing: 0});

    var stickySideMenu = function(){
        var navbar = $('.navbar.navbar-fixed-top.side-menu');

        if ($(window).width() >= 992) {
            navbar.unstick();
        }
        else
        {
            navbar.unstick();
            navbar.sticky({topSpacing: 0});
        }
    };

    stickySideMenu();


    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2500,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });


    /*---------------------------------------*/
    /*  JQUERY FOR PAGE SCROLLING FEATURE
     /*  requires jQuery Easing plugin
     /*---------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e){
            e.preventDefault();

            var $anchor = $(this);

            var offset = $('body').attr('data-offset');

            if($('.navbar.navbar-fixed-top').hasClass('side-menu') && $(window).width() >= 992){
                $('body').data('offset', 1);
                offset = $('body').data('offset');
            }

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
        });
    };

    pageScroll();

    /* ======= Twitter Bootstrap hover dropdown ======= */
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */
    
    $('[data-hover="dropdown"]').dropdownHover();
    
    /* ======= Fixed header when scrolled ======= */    
    $(window).bind('scroll', function() {
         
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('scrolled');
         }
         else {
             $('#header').removeClass('scrolled');
             
         }
    });
    
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();    
    
    /* ======= jQuery FitVids - Responsive Video ======= */
    /* Ref: https://github.com/davatron5000/FitVids.js/blob/master/README.md */
    
    $(".video-container").fitVids();
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon);    
    
    
    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
    $('.bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 8000
    });

    $('.clinics').flexslider({
       directionNav: false,
       // controlNav: false,
        slideshowSpeed: 8000
    });

    $('.learning').flexslider({
        directionNav: false,
        // controlNav: false,
        slideshowSpeed: 8000
    });

    $('.housing').flexslider({
        directionNav: false,
        // controlNav: false,
        slideshowSpeed: 8000
    });


    //wow js
    jQuery(document).ready(function () {
        wow = new WOW(
            {
                animateClass: 'animated',
                offset: 100,
                mobile: true
            }
        );
        wow.init();
    });

    /* ======= Smooth Scrolling ====== */
    smoothScroll.init({
        speed: 2000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    });

    /* ======= Stop Video Playing When Close the Modal Window ====== */
    $("#modal-video .close").on("click", function() {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));        
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    $('#testimonials-carousel').carousel({
      interval: 8000 
    });

});