import { popupFactory } from '../common/popupFactory';

{
  const successPopup = popupFactory(document.querySelector('.calculator-modal'));
  const calculatorBtnRef = document.querySelector('.conditions-btn');
  const closeBtnRef = document.querySelector('.close-calculator-popup');

  calculatorBtnRef.addEventListener('click', () => {
    successPopup.open();
  });
  closeBtnRef.addEventListener('click', () => {
    successPopup.close();
  });
}
