// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".animated-car", {
//     scrollTrigger: {
//         trigger: ".location-main",
//         start: "top center",
//         scrub: true,
//         pin: true,
//         mar
//       }
//     xPercent: -150,
//     ease: "none",

//   })

gsap.to('.animated-car', {
  x: 800,
  duration: 4,
  scrollTrigger: {
    trigger: '.location-main',
    start: 'top center',
    scrub: true,
    pin: true,
  },
});

// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray("section").forEach((section, index) => {
//     const w = section.querySelector(".wrapper");
//     const [x, xEnd] =
//       index % 2
//         ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
//         : [w.scrollWidth * -1, 0];
//     gsap.fromTo(
//       w,
//       { x },
//       {
//         x: xEnd,
//         scrollTrigger: {
//           trigger: section,
//           scrub: 0.5,
//         }
//       });
//   });var animation;

// gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
// gsap.set("#motion-car", {transformOrigin: "50% 50%"});

// animation = gsap.to("#motionSVG", {
//   scrollTrigger: {
//     trigger: "#motionPath",
//     start: "top 20%",
//     end: '+=5000px',
//     scrub: 1,
//     markers: true,
//     onUpdate: self => {
//       gsap.to("#motion-car", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
//     }
//   },
//   duration: 10,
//   ease: "none",
//   immediateRender: true,
//   motionPath: {
//     path: "#motionPath",
//     align: "#motionPath",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: 90,
//   }
// });
