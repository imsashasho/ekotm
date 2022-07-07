import { contactForm } from '../common/contactForm';
// import { popupFactory } from '../common/popupFactory';
// {
//   const successPopup = popupFactory(document.querySelector('.questions-modal'));
//   const questionFormRef = document.querySelector('.questions-form');
//   const closeBtnRef = document.querySelector('.close-popup');

//   questionFormRef.addEventListener('submit', event => {
//     event.preventDefault();
//     successPopup.open();
//   });

//   closeBtnRef.addEventListener('click', () => {
//     successPopup.close();
//   });
// }

contactForm(document.querySelector('[data-home-contact]'));
