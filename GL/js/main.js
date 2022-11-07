(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // let isMobile = window.matchMedia("(any-pointer:coarse)").matches;
//     let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
// if(isMobile){
//     $('#courses_nav').addClass('data-bs-toggle="dropdown"');
//     console.log("ismobile");
// }
// else{
//     $('#courses_nav').removeClass('data-bs-toggle="dropdown"');
// }


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            // $(my-header).removeClass("first");
            // $(my-header).addClass("second");
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
            // $(my-header).removeClass("second");
            // $(my-header).addClass("first");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
        // $( "td:empty" )
    if ($(".career-list-group:empty")){
         // #notifyCareer( "Was empty!" )
    $("#notifyCareer").text("There are currently no open vacancies, you may send us your c.v. for notification in future or contact us for career guidance help. ");
    }
    else{
        $("#notifyCareer").text("Please check the below vacancies, or contact us for career guidance");
    }
          // $(".have_career .list-group-item:emty").hide() 
          // $(".have_career .list-group-item:emty").hide() 



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

function displayCallTextFunction() {
    var x = document.getElementById("mycall");
    var y = document.getElementById("call2registerbtn");
    var z = document.getElementById("mycall2");
  //   if (x.style.display === "none") {
      z.style.display = "block";
      x.style.display = "block";
      y.style.display = "none";
  //   } else {
  //     x.style.display = "none";
  //   }
  }
  