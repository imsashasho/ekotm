const footerUpRef = document.querySelector('.footer-up');
var rootElement = document.documentElement;

function scrollToTop(e) {
  // Scroll to top logic
  e.preventDefault();
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
footerUpRef.addEventListener('click', scrollToTop);
