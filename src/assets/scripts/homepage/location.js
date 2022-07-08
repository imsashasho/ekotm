import { locoScroll } from '../common/customScroll';

const progressRef = document.querySelector('.animated-car');
const progressItemsRef = Array.from(document.querySelectorAll('.progress-line__circles-wrap'));
const windowHeight = window.innerHeight;
const offset = 100;

const setActivProgressItem = (relativeWidth) => {
  const numberOffActiveItems = Math.floor(relativeWidth * progressItemsRef.length);

  progressItemsRef.forEach((element, index) => {
    if (index > numberOffActiveItems - 1) {
      element.classList.remove('active');
      return;
    }

    element.classList.add('active');
  });
};

const changeProgress = (width) => {
  progressRef.style.width = width;
};

const handleScroll = () => {
  const { top } = progressRef.getBoundingClientRect();
  const diff = top + offset - windowHeight;

  if (diff >= 0) {
    changeProgress(0);
    return;
  }

  const diffAbs = Math.abs(diff);
  const relativeWidth = diffAbs < windowHeight - offset * 2 ? diffAbs / (windowHeight - offset * 2) : 1;

  changeProgress(`${relativeWidth * 100}%`);
  setActivProgressItem(relativeWidth);
};

window.addEventListener('scroll', handleScroll);
// locoScroll.on('scroll', handleScroll);
