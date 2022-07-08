import { popupFactory } from './popupFactory';

export const successPopup = popupFactory(document.querySelector('.questions-modal'));

const closeBtnRef = document.querySelector('.close-popup');

closeBtnRef.addEventListener('click', () => {
  successPopup.close();
});
