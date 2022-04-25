'use strict';

const pageHeader = document.querySelector('.page-header'),
  hamburgerList = pageHeader.querySelector('.hamburger__list'),
  hamburgerBtn = pageHeader.querySelector('.hamburger__btn');

hamburgerBtn.addEventListener('click', () => toggleClass());

hamburgerList.addEventListener('click', e => {
  // Получаю нажатую ссылку
  const link = e.target.closest('.hamburger__link');
  // Если нажали мимо ссылки, то прерываю функцию
  if (!link) return;
  // Закрываю меню
  toggleClass();
});

function toggleClass() {
  hamburgerList.classList.toggle('hamburger__toggle');
  pageHeader.classList.toggle('hamburger__toggle');
  document.body.style.overflow === 'hidden' ?
    document.body.style.overflow = '' :
    document.body.style.overflow = 'hidden';
}
