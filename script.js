'use strict';

const pageHeader = document.querySelector('.page-header'),
  hamburgerList = pageHeader.querySelector('.hamburger__list'),
  hamburgerBtn = pageHeader.querySelector('.hamburger__btn');

hamburgerBtn.addEventListener('click', () => toggleClass());

hamburgerList.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'A') return;
  toggleClass();
});

function toggleClass() {
  hamburgerList.classList.toggle("hamburger__toggle");
  pageHeader.classList.toggle("hamburger__toggle");
  document.body.classList.toggle("hamburger__toggle");
}
