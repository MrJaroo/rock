$(document).ready(function () {
    let fulter = $('.filter__date');
    let kal = $('.auto-kal');


    fulter.on('click', function () {
        kal.toggleClass('auto-kal--active');
    });

    $('.slider-top').slick();

    $('.behavior-rules__accrodion .accrodion__title').on("click", function () {
        $('.behavior-rules__accrodion .accrodion__text').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $("#mygallery").justifiedGallery({
        rowHeight: 200,
        margins: 5,
    });

    let accordion = function () {
        let data = $('.accordion').attr("data-accordion");
        $('.accordion-header').on('click', function () {
            if (data === 'close') {
                $('.accordion-body').slideUp();
                if ($(this).hasClass('active')) {
                    $(this).toggleClass('active')
                }
                else {
                    $('.accordion-header').removeClass('active');
                    $(this).toggleClass('active');
                }
            }
            else {
                $(this).toggleClass('active')
            }
            $(this).next('accordion-body').not(':animated').slideToggle();
        })
    }


    accordion()

});