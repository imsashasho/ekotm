import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { intersectionObserver } from '../common/intersectionObserver';
// import { preloader } from '../common/loader';

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: 'section.intro',
      scrub: 1,
      start: '0% top',
      end: '60% top',
      // markers: true,
    },
  })
  // .to('.intro-inner__text-wrap', {
  //   y: 150,

  //   autoAlpha: 1,
  // })
  .to('.intro-inner__text', { autoAlpha: 0, duration: 0.25 }, '<');

//   preloader.onRemove(() => {
//     animationItemSelectors.forEach(selector => {
//       intersectionObserver(selector, () => {
//         splitToLinesAndFadeUp(selector);
//       });
//     });
//   });

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
  const tl = gsap
    .timeline()
    .fromTo(
      elementRef.querySelectorAll('span>span'),
      { yPercent: 100 },
      {
        yPercent: 0,
        stagger: 0.05,
        duration: 1,
        opacity: 1,
        ease: 'power4.out',
      },
    )
    .add(() => {
      elementRef.innerHTML = elementRef.textContent;
    });
}

function clipPathEntry(selector, scroller, effectConfig = {}, gsap, cb = () => {}) {
  const startClip = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
  const endClip = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  document.querySelectorAll(selector).forEach(text => {
    const tl = gsap
      .timeline({
        // paused: true,
        scrollTrigger: {
          trigger: text,
          scroller: scroller || null,
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
          delay: 0.3,
          ease: 'power4.out',
          clearProps: 'transform',
          ...effectConfig,
        },
      )
      .add(cb);
  });
}

clipPathEntry('.about-card--large', document.body, {}, gsap);
gsap.set('.numbers-card:nth-child(odd)', {
  opacity: 0,
  yPercent: 20,
  scale: 0.9,
});
gsap.set('.numbers-card:nth-child(even)', {
  yPercent: -100,
  opacity: 0,
});

document.addEventListener('DOMContentLoaded', () => {
  ScrollTrigger.batch('.numbers-row', {
    start: 'top 80%',
    end: 'bottom 10%',
    onEnter: batch => {
      batch.forEach((card, index) => {
        // const img = card.querySelectorAll('.conditions-card-img');
        const container1 = card.querySelectorAll('.numbers-card:nth-child(odd)');
        const container2 = card.querySelectorAll('.numbers-card:nth-child(even)');
        const chart_tl = gsap.timeline();
        chart_tl.to(
          container1,
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
          container2,
          {
            opacity: 1,
            yPercent: 0,
            stagger: 0.2,
            delay: index * 0.2,
            ease: Power3.easeOut,
            duration: 0.8,
          },
          0.8,
        );
      });
    },
    once: true,
  });
});

gsap.set('.documents-card', {
  yPercent: 100,
  opacity: 0,
});

document.addEventListener('DOMContentLoaded', () => {
  ScrollTrigger.batch('.documents-list', {
    start: 'top 80%',
    end: 'bottom 10%',
    onEnter: batch => {
      batch.forEach((card, index) => {
        // const img = card.querySelectorAll('.conditions-card-img');
        const documentCard = card.querySelectorAll('.documents-card');
        const chart_tl = gsap.timeline();
        chart_tl.to(
          documentCard,
          {
            opacity: 1,
            yPercent: 0,
            stagger: 0.2,
            delay: index * 0.2,
            ease: Power4.easeOut,
            duration: 0.8,
          },
          0.8,
        );
      });
    },
    once: true,
  });
});

gsap.set('.questions-card', {
  xPercent: -20,
  opacity: 0,
});

document.addEventListener('DOMContentLoaded', () => {
  ScrollTrigger.batch('.questions-list', {
    start: 'top 80%',
    end: 'bottom 10%',
    onEnter: batch => {
      batch.forEach((card, index) => {
        const documentCard = card.querySelectorAll('.questions-card');
        const chart_tl = gsap.timeline();
        chart_tl.to(
          documentCard,
          {
            opacity: 1,
            xPercent: 0,
            stagger: 0.2,
            delay: index * 0.3,
            ease: Power3.easeOut,
            duration: 0.8,
          },
          0.8,
        );
      });
    },
    once: true,
  });
});
