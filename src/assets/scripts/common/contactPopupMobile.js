import { popupFactory } from '../common/popupFactory';
import { contactPopup } from './contactPopup';

export const contactPopupMobile = popupFactory(document.querySelector('.form-header-call'));
const closeBtnMobileRef = document.querySelector('.js-mobile-close');
const mobileOpenFormRef = document.querySelector('.js-mobile-form');

closeBtnMobileRef.addEventListener('click', () => {
  contactPopupMobile.close();
});

mobileOpenFormRef.addEventListener('click', () => {
  contactPopup.open();
  contactPopupMobile.close();
});
