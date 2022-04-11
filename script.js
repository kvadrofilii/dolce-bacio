'use strict';

const pageHeader = document.querySelector('.page-header');
const hamburgerList = pageHeader.querySelector('.hamburger__list');
const hamburgerBtn = pageHeader.querySelector('.hamburger__btn');

hamburgerBtn.addEventListener('click', () => toggleClass());

hamburgerList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName !== 'A') return;
  toggleClass();
});

function toggleClass() {
  hamburgerList.classList.toggle("hamburger__toggle");
  pageHeader.classList.toggle("hamburger__toggle");
  document.body.classList.toggle("hamburger__toggle");
}
