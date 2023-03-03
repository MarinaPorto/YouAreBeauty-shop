$(document).ready(function () {
  console.log('slider')
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,

        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
})



$(document).ready(function () {
  $('.slider-reviews').slick({
    arrows: true,
    slidesToShow: 1,
    appendArrows: $('.slider_arrows'),
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
  })
})


const menuList = document.querySelector('.nav__items');
const burgerMenu = document.querySelector('.burger__btn');
const inputDate = document.querySelector('.form__date');
let menuItems = document.querySelectorAll('.nav')

burgerMenu.addEventListener('click', function () {
  menuList.classList.toggle('active');
  document.body.classList.toggle('body__active');
  this.classList.toggle('burger-active');
})

menuItems.forEach((el, index) => {
  el.addEventListener('click', function () {
    menuList.classList.remove('active');
    document.body.classList.remove('body__active');
    burgerMenu.classList.toggle('burger-active');
  })
})

