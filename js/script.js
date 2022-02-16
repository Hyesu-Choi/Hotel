let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper2 = new Swiper(".rooms-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
