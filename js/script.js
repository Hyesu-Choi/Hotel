// 스페셜 오퍼 swiper 
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

// 객실 미리보기 swiper 
  var swiper2 = new Swiper(".rooms-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // 데스크탑, 태블릿 메뉴 온오프
  $('.nav').hover(function(){
    $('.sub-menu').stop().slideDown();
  }, function(){
    $('.sub-menu').stop().slideUp();
  });



// 모바일 영역 메뉴 온오프 
  $('.menu-bar').click(function(){
    $('.bx-menu, .bx-x').toggleClass('open');
    $('.nav-mob').toggleClass('open-menu');
  })


  // //모바일 서브메뉴 온오프
  // $('.nav-mob>ul>li').hover(function(){
  //   $(this).find('.sub-menu-mob').stop().slideDown();
  // }, function(){
  //   $(this).find('.sub-menu-mob').stop().slideUp();
  // });



