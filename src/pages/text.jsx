const swiper = new Swiper('.swiper', {
  slidesOffsetBefore: 2,
  speed: 600,
  loop: true,
  loopPreventsSliding: false,
  parallax: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    hideOnClick: true
  },
  autoplay: {
    pauseOnMouseEnter: true
  },
  keyboard: true
});