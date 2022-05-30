const swiperThumbnails = new Swiper('.swiper-thumbnails', {
  spaceBetween: 0,
  slidesPerView: 6,
  direction: 'vertical',
  loop: true,
  navigation: {
    prevEl: '.gallery-slider-prev',
    nextEl: '.gallery-slider-next',
  },
});

const swiperGallery = new Swiper('.swiper-gallery', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  loop: true,
  lazy: {
    loadPrevNext: false,
    loadOnTransitionStart: true,
  },
  speed: 300,
  thumbs: {
    swiper: swiperThumbnails,
  },
  navigation: {
    prevEl: '.gallery-slider-prev',
    nextEl: '.gallery-slider-next',
  },
  pagination: {
    el: '.gallery-slider__pagination',
    clickable: true,
    type: 'progressbar',
    direction: 'horizontal',
  },

  // zoom: {
  //     maxRatio: 3,
  // }
});
