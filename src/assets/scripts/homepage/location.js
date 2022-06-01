{
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
}
