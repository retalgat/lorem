const headerButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');

function isMenuOpen() {
  return headerButton.getAttribute('aria-expanded') === 'true';
}

function openMenu() {
  headerButton.setAttribute('aria-expanded', 'true');
  menu.classList.add('menu--open');
}

function closeMenu() {
  headerButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('menu--open');
}

headerButton.addEventListener('click', () => {
  isMenuOpen() ? closeMenu() : openMenu();
});
