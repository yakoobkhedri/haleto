// swiper
var app = new Swiper(".app", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 36,
  pagination: {
    el: ".swiper-pagination",
  },
});
var blog = new Swiper(".blog", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 36,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// aos
AOS.init();

let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev');

nextBtn.addEventListener('click',function () {
  this.parentElement.parentElement.parentElement.classList.add('d-none');
  this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('d-none');
})
prevBtn.addEventListener('click',function () {
  this.parentElement.parentElement.classList.add('d-none');
  this.parentElement.parentElement.previousElementSibling.classList.remove('d-none');
})