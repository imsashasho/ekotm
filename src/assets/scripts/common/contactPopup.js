import { popupFactory } from './popupFactory';

export const contactPopup = popupFactory(document.querySelector('.form-modal'));
const closeBtnRef = document.querySelector('.close-form-popup');

closeBtnRef.addEventListener('click', () => {
  contactPopup.close();
});
