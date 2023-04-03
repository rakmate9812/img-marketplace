export const swiper = function () {
  new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoint in px
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 4,
      },
      950: {
        slidesPerView: 6,
      },
    },
  });
};
