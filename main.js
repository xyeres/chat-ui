const menuIcon = document.querySelector('.infoBar__userMenuToggle');
const screenContainer = document.querySelector('.screenContainer');
const userMenu = document.querySelector('.userMenu');
const messages = document.querySelector('.messages');

const toggleMenu = () => {
  screenContainer.classList.toggle('userMenu__activeMenu');
  userMenu.classList.toggle('d-none')
}

menuIcon.onclick = () => toggleMenu();
messages.onclick = () => {
  if (screenContainer.classList.contains('userMenu__activeMenu')) {
    toggleMenu();
  }
}