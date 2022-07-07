import { locoScroll } from './customScroll';
import { popupFactory } from './popupFactory';
import { contactForm } from './contactForm';
import { contactPopup } from './contactPopup';
import { contactPopupMobile } from './contactPopupMobile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

{
  const headerRef = document.querySelector('.header');
  const menuRef = document.getElementById('menu');
  const toggleBtnRef = document.getElementById('toggle-menu');

  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener('scroll', function(evt) {
    scrollFunction();
  });
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerRef.classList.add('bg-header');
      headerRef.classList.remove('on');
      toggleBtnRef.classList.remove('on');
    } else {
      headerRef.classList.remove('bg-header');
    }
  }

  // const changeHeaderStyle = offset => {
  //   if (offset > 50) {
  //     headerRef.classList.add('bg-header');
  //   } else {
  //     headerRef.classList.remove('bg-header');
  //   }
  // };

  // const handleScroll = event => {
  //   changeHeaderStyle(document.body.offset);
  // };

  // const handleCustomScroll = event => {
  //   const { scroll } = event;
  //   const { y } = scroll;
  //   changeHeaderStyle(y);
  // };

  // window.addEventListener('scroll', handleScroll);
  // locoScroll.on('scroll', handleCustomScroll);

  const toggleMenu = () => {
    toggleBtnRef.classList.toggle('on');
    headerRef.classList.toggle('on');
  };

  toggleBtnRef.addEventListener('click', toggleMenu);

  const activeBtnRef = document.querySelector('.call__phone');
  const hiddenNumRef = document.querySelector('.call__phone-hidden');

  const toggleActive = e => {
    e.preventDefault();
    activeBtnRef.classList.toggle('hide');
    hiddenNumRef.classList.toggle('on');
  };

  activeBtnRef.addEventListener('click', toggleActive);

  const requestFormRef = document.querySelector('.request');
  const requestFormMobileRef = document.querySelector('[data-open-call]');
  const requestFormTabRef = document.querySelector('[data-open-call-tab]');

  requestFormRef.addEventListener('click', () => {
    contactPopup.open();
  });

  requestFormMobileRef.addEventListener('click', e => {
    e.preventDefault();
    contactPopupMobile.open();
  });

  requestFormTabRef.addEventListener('click', e => {
    e.preventDefault();
    contactPopupMobile.open();
  });

  const newLocal = '[data-modal-contact]';
  contactForm(document.querySelector(newLocal), () => contactPopup.close());
}
