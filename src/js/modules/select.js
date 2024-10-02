const select = document.querySelector('.select');
const selectButton = document.querySelector('.select__button');

selectButton.addEventListener('click', () => {
  select.classList.toggle('select--open');
});
