'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var pageHeader = document.querySelector('.page-header__wrapper');
var headerToggle = document.querySelector('.page-header__toggle');
var nav = document.querySelector('.main-nav');
var navItems = document.querySelectorAll('.main-nav__item');

pageHeader.classList.remove('page-header__wrapper--no-js');
nav.classList.remove('main-nav--no-js');
nav.classList.add('main-nav--js');

var onMenuEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    hideMenu();
  }
};

var showMenu = function () {
  pageHeader.classList.add('page-header__wrapper--close');
  nav.classList.add('main-nav--js');
  document.addEventListener('keydown', onMenuEscPress);
};

var hideMenu = function () {
  pageHeader.classList.remove('page-header__wrapper--open');
  pageHeader.classList.add('page-header__wrapper--close');
  document.removeEventListener('keydown', onMenuEscPress);
};

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header__wrapper--close')) {
    pageHeader.classList.remove('page-header__wrapper--close');
    pageHeader.classList.add('page-header__wrapper--open');
    document.addEventListener('keydown', onMenuEscPress);
  } else {
    pageHeader.classList.add('page-header__wrapper--close');
    pageHeader.classList.remove('page-header__wrapper--open');
    document.removeEventListener('keydown', onMenuEscPress);
  }
});

headerToggle.addEventListener('keydown', function (evt) {
  if (pageHeader.classList.contains('page-header__wrapper--close')) {
    if (evt.key === ENTER_KEY) {
      showMenu();
    }
  } else if (pageHeader.classList.contains('page-header__wrapper--open')) {
    if (evt.key === ENTER_KEY) {
      hideMenu();
    }
  }
});

navItems.forEach(function (e) {
  e.addEventListener('click', function () {
    hideMenu();
  });
});

nav.addEventListener('click', function () {
  hideMenu();
});
