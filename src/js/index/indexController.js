import $ from "../../../node_modules/jquery/dist/jquery.min.js";
import * as model from "./indexModel.js";
import * as cfg from "../config.js";

// console.log($());

// getting 6 images from unsplash
model.getData(
  "https://api.unsplash.com/search/photos/?query=mountains&page=21&per_page=6",
  cfg.ACCESS_KEY
);

var swiper = new Swiper(".slide-content", {
  slidesPerView: 6,
  spaceBetween: 25,
  loop: true,
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

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
