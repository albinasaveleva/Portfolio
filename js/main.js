let burgerMenu = document.querySelector("#burger-menu");
let burgerMenuButton = document.querySelector("#burger-menu__button");
let burgerMenuButtonExit = document.querySelector("#burger-menu__button-exit");


burgerMenuButton.addEventListener('click', function() {
  burgerMenu.classList.remove('burger-menu_inactive');
})
burgerMenuButtonExit.addEventListener('click', function() {
  burgerMenu.classList.add('burger-menu_inactive');
})