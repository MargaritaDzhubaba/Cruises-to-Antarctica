'use strict'

const toggleBlockScroll = () => {
  document.body.classList.toggle('scroll-hidden');
};


const header = document.querySelector('.page-header');
const button = document.querySelector('.page-header__toggle');
const nav = document.querySelector('.main-nav');
const navButtons = document.querySelectorAll('.main-nav__item');

const toogleMenu = () => {
  header.classList.toggle('page-header--open');
  header.classList.toggle('page-header--close');
  toggleBlockScroll();
};

header.classList.remove('page-header--no-js');
header.classList.add('page-header--close');
nav.classList.remove('main-nav--no-js')
nav.classList.add('main-nav--js');

button.addEventListener('click', toogleMenu);

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (header.classList.contains('page-header--open')) {
      toogleMenu();
    }
  });
});
