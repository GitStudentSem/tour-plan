$(document).ready(function () {
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
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  // Нажатие Escape
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault(); //отключает переброс на верх страницы
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка валидации формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter a name",
          minlength: "At least two characters",
        },
        email: {
          required: "Enter your email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter your phone",
          minlength: "Enter your phone number in full",
        },
      },
    });
    $.validator.methods.email = function (value, element) {
      return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
    };
  });
  AOS.init();
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
