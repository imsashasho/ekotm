import { locoScroll } from './customScroll';
import { contactPopup } from './contactPopup';

const footerUpRef = document.querySelector('.footer-up');

function scrollToTop(e) {
  // Scroll to top logic
  e.preventDefault();
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
}

footerUpRef.addEventListener('click', scrollToTop);

const footerOpenPopupRef = document.querySelector('.footer-btn');

footerOpenPopupRef.addEventListener('click', () => {
  contactPopup.open();
});
