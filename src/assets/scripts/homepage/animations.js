import { intersectionObserver } from '../common/intersectionObserver';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { addIntersectionOnceWithCallback } from '../modules/helpers/helpers';
import fake3d from '../modules/sequence';
import { preloader } from '../common/loader';

gsap.registerPlugin(ScrollTrigger);

{
  const animationItemSelectors = [
    '.main-bottom__descr-title',
    '.main-bottom__descr-text',
    '.trusted-main__left-descr',
    '.location-bottom__left-header',
    '.location-bottom__left-descr',
    '.visual-main__right-header',
    '.visual-main__right-descr',
    '.visual-main__right-text',
    '.development-video-title',
    '.details-header__title',
    '.details-header__quote-descr',
    // '.details-card-title',
    // '.details-card-description',
    '.conditions-title',
    '.questions-form-title',
    '.news-top-title',
    '.answers-title',
  ];

  preloader.onRemove(() => {
    animationItemSelectors.forEach(selector => {
      intersectionObserver(selector, () => {
        splitToLinesAndFadeUp(selector);
      });
    });
  });
  console.log(preloader);

  function splitToLinesAndFadeUp(selector) {
    const elementRef = document.querySelector(selector);
    let mathM = elementRef.innerHTML.match(
      /<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g,
    );
    if (mathM === null) return;
    mathM = mathM.map(el => `<span style="display:inline-flex"><span>${el}</span></span>`);
    elementRef.innerHTML = mathM.join(' ');
    gsap.set(elementRef, { overflow: 'hidden', opacity: 1 });
    gsap.set(elementRef.children, { overflow: 'hidden' });
    gsap.set(elementRef.querySelectorAll('span>span'), {
      overflow: 'initial',
      display: 'inline-block',
    });
    let tl = gsap
      .timeline()
      .fromTo(
        elementRef.querySelectorAll('span>span'),
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.05, duration: 1, opacity: 1, ease: 'power4.out' },
      )
      .add(() => {
        elementRef.innerHTML = elementRef.textContent;
      });
  }

  intersectionObserver('.trusted-main', () => {
    const digits = document.querySelectorAll('.animated-price');
    digits.forEach(digitForAnim => {
      const isDigitInteger = Number.isInteger(+digitForAnim.dataset.count);
      gsap.fromTo(
        digitForAnim,
        {
          textContent: 0,
        },
        {
          textContent: (e, target) => {
            return target.dataset.count;
          },
          duration: 3,
          ease: 'power1.out',
          snap: { textContent: isDigitInteger ? 1 : 0.1 },
          stagger: 0,
          // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        },
      );
    });
  });
  // var tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.answers-main-right',
  //     scrub: true,
  //     pin: false,
  //   },
  // });
  // tl.from('.answers-main-right img', {
  //   yPercent: -5,
  //   ease: 'none',
  // }).to('.answers-main-right img', {
  //   yPercent: 5,
  //   ease: 'none',
  // });

  // var tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.questions-main__inner',
  //     scrub: true,
  //     pin: false,
  //   },
  // });
  // tl.from('.cropped-house', {
  //   yPercent: -5,
  //   ease: 'none',
  // }).to('.cropped-house', {
  //   yPercent: 5,
  //   ease: 'none',
  // });

  const romankivSequenceEl = document.querySelector('[data-sequence-romankiv]');
  addIntersectionOnceWithCallback(romankivSequenceEl, () => {
    const fakeRomankiv = fake3d(
      romankivSequenceEl,
      romankivSequenceEl.dataset.sequenceRomankiv,
      120,
    );
    if (fakeRomankiv === undefined) return;
    ScrollTrigger.create({
      trigger: document.querySelector('[data-sequence-romankiv]'),
      onUpdate: ({ progress }) => {
        const scaleFactor = fakeRomankiv.imagesCount / 100;
        const percentage = (progress * 100 * scaleFactor).toFixed(0);
        requestAnimationFrame(() => {
          fakeRomankiv.changeImage(percentage);
        });
      },
    });
  });

  function clipPathEntry(selector, scroller, effectConfig = {}, gsap, cb = () => {}) {
    const startClip = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
    const endClip = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    document.querySelectorAll(selector).forEach(text => {
      let tl = gsap
        .timeline({
          // paused: true,
          scrollTrigger: {
            trigger: text,
            scroller: scroller ? scroller : null,
            once: true,
          },
        })
        .fromTo(
          text,
          { clipPath: startClip, webkitClipPath: startClip },
          {
            clipPath: endClip,
            webkitClipPath: endClip,
            duration: 2,
            delay: 0.4,
            ease: 'power4.out',
            clearProps: 'transform',
            ...effectConfig,
          },
        )
        .add(cb);
    });
  }

  clipPathEntry(
    '.development-video-wrap, .conditions-card-img, .news-slider',
    document.body,
    {},
    gsap,
  );

  function clipPathEntry2(selector, scroller, effectConfig = {}, gsap, cb = () => {}) {
    const startClip = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
    const endClip = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    document.querySelectorAll(selector).forEach(text => {
      let tl = gsap
        .timeline({
          // paused: true,
          scrollTrigger: {
            trigger: text,
            scroller: scroller ? scroller : null,
            once: true,
          },
        })
        .fromTo(
          text,
          { clipPath: startClip, webkitClipPath: startClip },
          {
            clipPath: endClip,
            webkitClipPath: endClip,
            duration: 1.5,
            delay: 0.2,
            ease: 'power4.out',
            clearProps: 'transform',
            ...effectConfig,
          },
        )
        .add(cb);
    });
  }
  clipPathEntry2('.trusted-main', document.body, {}, gsap);

  gsap.set('.map-navigation', {
    opacity: 0,
    xPercent: -100,
    scale: 0.9,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.map-navigation', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          let chart_tl = gsap.timeline();
          chart_tl.to(
            card,
            {
              opacity: 1,
              xPercent: 0,
              scale: 1,
              delay: index * 0.1,
              ease: Power4.easeOut,
              duration: 1,
            },
            0.4,
          );
        });
      },
      once: true,
    });
  });

  gsap.set('.details-card', {
    opacity: 0,
    yPercent: 20,
    scale: 0.9,
  });
  gsap.set('.details-card-img', {
    scaleY: 0,
    transformOrigin: '0% 100%',
  });
  gsap.set('.details-card-title', {
    yPercent: -100,
    opacity: 0,
  });
  gsap.set('.details-card-description', {
    yPercent: -100,
    opacity: 0,
  });

  document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.batch('.details-card', {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: batch => {
        batch.forEach((card, index) => {
          let img = card.querySelectorAll('.details-card-img');
          let title = card.querySelectorAll('.details-card-title');
          let descr = card.querySelectorAll('.details-card-description');
          let chart_tl = gsap.timeline();
          chart_tl.to(
            card,
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
              delay: index * 0.2,
              ease: Power3.easeOut,
              duration: 1,
            },
            0.4,
          );
          chart_tl.to(
            img,
            {
              scaleY: 1,
              stagger: 0.2,
              delay: index * 0.2,
              ease: Power3.easeOut,
              duration: 1,
            },
            0.4,
          );
          chart_tl.to(
            title,
            {
              opacity: 1,
              yPercent: 0,
              stagger: 0.2,
              delay: index * 0.2,
              ease: Power3.easeOut,
              duration: 0.4,
            },
            1,
          );
          chart_tl.to(
            descr,
            {
              opacity: 1,
              yPercent: 0,
              stagger: 0.2,
              delay: index * 0.2,
              ease: Power4.easeOut,
              duration: 0.6,
            },
            1.2,
          );
        });
      },
      once: true,
    });
  });

  let revealContainers = document.querySelectorAll('.visual-main__right-bottom');

  revealContainers.forEach(container => {
    let image = container.querySelector('.visual-main__photo-owner');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: 'restart none none reset',
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(image, {
      opacity: 1,
      scale: 0.8,
      delay: -1.1,
      ease: Power2.out,
      duration: 1.5,
    });
  });
}
