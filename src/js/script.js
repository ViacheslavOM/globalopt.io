$(document).ready(function(){
    $('.review__block').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-chevront.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-chevront.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    // smooth scroll 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });
});