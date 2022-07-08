import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);
window.addEventListener('scroll', (evt) => {
  scrollFunction();
});
const header = document.querySelector('.header');
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('header').classList.add('bg-header');
  } else {
    document.querySelector('header').classList.remove('bg-header');
  }
}
