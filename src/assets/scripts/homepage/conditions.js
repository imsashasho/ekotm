{
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

  const successPopup = popupFactory(document.querySelector('.calculator-modal'));
  console.log(successPopup);
  const calculatorBtnRef = document.querySelector('.conditions-btn');
  const closeBtnRef = document.querySelector('.close-calculator-popup');
  calculatorBtnRef.addEventListener('click', () => {
    successPopup.open();
  });
  closeBtnRef.addEventListener('click', () => {
    successPopup.close();
  });
}
