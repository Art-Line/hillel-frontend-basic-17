$('.js-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    // arrows: false,
    prevArrow: '<button type="button" class="my-arrow my-arrow-prev"></button>',
    nextArrow: '<button type="button" class="my-arrow my-arrow-next"></button>',
    dots: true,
    dotsClass: 'my-dots',
    draggable: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                draggable: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
  });