var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
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