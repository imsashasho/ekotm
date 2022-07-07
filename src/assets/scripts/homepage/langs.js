{
  const toggleLangBtnRef = document.querySelector('.main-bottom__langs-switch');

  const toggleLang = () => {
    toggleLangBtnRef.classList.add('on');
  };

  toggleLangBtnRef.addEventListener('click', toggleLang);
}
