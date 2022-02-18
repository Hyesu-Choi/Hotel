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


  $('.header-bottom').hover(function(){
    $('.sub-menu').stop().slideDown();
  }, function(){
    $('.sub-menu').stop().slideUp();
  });


  // $('nav > ul > li').hover(function(){
  //   $(this).find('.sub-menu').stop().slideDown();
  // }, function(){
  //   $('.sub-menu').stop().slideUp();
  // });

