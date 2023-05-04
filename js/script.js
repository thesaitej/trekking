/*=================================================
            preloader
==================================================*/
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});
/*=================================================
            Camp
==================================================*/
$(function () {
    $("#camp-sites").owlCarousel({
        items: 2,
        autoplay: true,
        dotsSpeed: 700,
        nav: true,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            767: {
                items: 3
            }
        }
    });
});
/*============================================================
                    portfolio
=============================================================*/
$(window).on('load', function () {
    // initislize isotope
    $('#isotope-container').isotope({});
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        // get filter value
        var filtervalue = $(this).attr('data-filter');
        // filter portfolio
        $('#isotope-container').isotope({
            filter: filtervalue
        });
        //#mobile-nav-open-btn active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*============================================================
                navigation
=============================================================*/
$(function () {

    showhidenav();

    $(window).scroll(function () {

        showhidenav();

    });

    function showhidenav() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/home/logo.png");

            // show back to top btn
            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/home/logo.png");

            // hide back to top btn
            $("#back-to-top").fadeOut();

        }
    }
});


/*============================================================
                    Mobile menu
=============================================================*/
$(function () {

    /* show mobile nav */
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    /* hide mobile nav */
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});

/*============================================================
                    animation
=============================================================*/
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home h2").addClass("animated slideInLeft");
    $("#home p").addClass("animated zoomIn");
    $("#home .btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});