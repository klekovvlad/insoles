const swiper = new Swiper('.swiper', {
    speed: 1000,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      autoplay: {
        delay: 7000,
      },
  });