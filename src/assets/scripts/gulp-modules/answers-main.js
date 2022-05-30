(function () {
  const swiper = new Swiper('.answers-slider', {
    grabCursor: true,
    loop: false,
    autoHeight: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: 0,
    preloadImages: false,
    lazy: true,
    // watchSlidesVisibility: true,
    speed: 400,
    breakpoints: {
      768: {
        direction: 'vertical',
      },
      360: {
        spaceBetween: 50,
        centeredSlides: true,
        direction: 'horizontal',
      },

    },

    simulateTouch: true,
    navigation: {
      nextEl: '.answers-slider-next',
      prevEl: '.answers-slider-prev',
    },
  });
}());
