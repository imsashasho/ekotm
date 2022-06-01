const toggleBtnRef = document.getElementById('toggle-menu');
const headerRef = document.querySelector('header');

const toggleMenu = () => {
  toggleBtnRef.classList.toggle('on');
  headerRef.classList.toggle('on');
};

toggleBtnRef.addEventListener('click', toggleMenu);

const popupFactory = ref => ({
  open() {
    this.element.classList.add('modal-open');
  },
  close() {
    this.element.classList.remove('modal-open');
  },
  toggle() {
    this.element.classList.toggleClass('modal-open');
  },
  element: ref,
});

const successPopup = popupFactory(document.querySelector('.form-modal'));

const requestFormRef = document.querySelector('.request');
const closeBtnRef = document.querySelector('.close-form-popup');

requestFormRef.addEventListener('click', () => {
  successPopup.open();
});

closeBtnRef.addEventListener('click', () => {
  successPopup.close();
});
