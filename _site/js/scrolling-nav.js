//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("nav-scrolled");
    } else {
        $(".navbar-fixed-top").removeClass("nav-scrolled");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* ======= Yamm Menu ======= */
$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation();
});



/* ======= Status Page Indicator ======= */
var sp = new StatusPage.page({ page: '2ysks3x7n57s'});

sp.summary({
  success: function(data) {
    // adds the text description to the dropdown
    $('.color-description').text(data.status.description);
    // appends the status indicator as a class name so we can use the right color for the status light thing
    $('.color-dot').addClass(data.status.indicator);
  }
});