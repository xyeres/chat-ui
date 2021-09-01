const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');
const userMenu = document.querySelector('.userMenu');
const messages = document.querySelector('.messages');
const dim = document.querySelector('.dim');


const toggleMenu = () => {
  userMenu.classList.toggle('userMenu--active')
  dim.classList.toggle('dim--active');
}

menuOpen.onclick = () => toggleMenu();
menuClose.onclick = () => toggleMenu();
messages.onclick = () => {
  if (userMenu.classList.contains('userMenu--active')) {
    toggleMenu();
  }
}