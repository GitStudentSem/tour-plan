var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: "coverflow",
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
// ymaps.ready(init);
// var myMap,
//   myPlacemark1;

// function init() {
//   myMap = new ymaps.Map("map", {
//     center: [7.891714, 98.295965],
//     zoom: 14
//   });

//   myPlacemark1 = new ymaps.Placemark([7.891714, 98.295965], {
//     hintContent: 'GRAND HILTON HOTEL',
//     balloonContent: 'DoubleTree by Hilton Phuket Banthai Resort'
//   });

//   myMap.geoObjects.add(myPlacemark1)
// }
