import { constructionPopup } from '../gulp-modules/construction-gallery-popup';
import { getGalleryById } from '../api';
import { slidesView } from '../construction/slidesView';

{
  const swiperThumbnails = new Swiper('.development-video-thumbnails', {
    spaceBetween: 50,
    slidesPerView: 2,
    // direction: 'vertical',
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
        // direction: 'horisontal',
        slidesPerView: 2,
        spaceBetween: 50,
      },
      360: {
        // direction: 'horisontal',
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });

  const constructionListRef = document.querySelector('.development-video-thumbnails');
  const constructionCloseBtnRef = document.querySelector('.gallery-slider__link-back');

  const handleOpenConstructionPopup = async (event) => {
    event.preventDefault();
    const { target } = event;
    const cardRef = target.closest('.development-video-month__card');
    if (!cardRef) return;

    const id = +cardRef.dataset.id;
    try {
      const { data } = await getGalleryById(id);
      const slides = slidesView(data[0].data.gallery);
      constructionPopup.openWithSlides(slides);
    } catch (error) {
      console.warn(error);
    }
  };

  constructionCloseBtnRef.addEventListener('click', (e) => {
    e.preventDefault();
    constructionPopup.close();
  });
  constructionListRef.addEventListener('click', handleOpenConstructionPopup);
}
