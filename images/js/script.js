  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 70,

    loop: true,
    loop: true, 
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
