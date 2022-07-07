{
  const swiper = new Swiper('.news-slider', {
    grabCursor: true,
    loop: true,
    keyboard: true,
    spaceBetween: 10,
    initialSlide: 1,
    preloadImages: false,
    lazy: true,
    watchSlidesVisibility: true,
    speed: 300,
    breakpoints: {
      1400: {
        autoHeight: true,
        slidesPerView: 3,
        centeredSlides: true,
      },
      768: {
        spaceBetween: 50,
        initialSlide: 1,
        autoHeight: true,
        slidesPerView: 2,
        centeredSlides: false,
      },
      360: {
        spaceBetween: 0,
        slidesPerView: 1,
        autoHeight: true,
        centeredSlides: false,
      },
    },
    simulateTouch: true,
    navigation: {
      nextEl: '.news-slider-next',
      prevEl: '.news-slider-prev',
    },
    pagination: {
      el: '.news-slider__pagination',
      clickable: true,
      type: 'progressbar',
    },
  });
}
