let burger = document.querySelector('.burger-btn');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-list-link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger-btn--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
  }
)

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger-btn--active');

    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');
  })
})