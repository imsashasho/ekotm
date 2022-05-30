const swiperThumbnails = new Swiper('.development-video-thumbnails', {
  spaceBetween: 50,
  slidesPerView: 2,
  direction: 'vertical',
  loop: true,
  navigation: {
    prevEl: '.development-video-prev',
    nextEl: '.development-video-next',
  },
  pagination: {
    el: '.development-video__pagination',
    clickable: true,
    type: 'progressbar',
    direction: 'vertical',
  },
  breakpoints: {
    1400: {
      direction: 'vertical',
    },
    768: {
      direction: 'horisontal',
      slidesPerView: 2,
      spaceBetween: 50,
    },

  },
});

const swiperGallery = new Swiper('.swiper-development-video', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  loop: true,
  lazy: true,
  lazy: {
    loadPrevNext: false,
    loadOnTransitionStart: true,
  },
  speed: 300,
  thumbs: {
    swiper: swiperThumbnails,
  },
  // navigation: {
  //     prevEl: '.development-video-prev',
  //     nextEl: '.development-video-next',
  // },


  // zoom: {
  //     maxRatio: 3,
  // }
});
