let burgerMenu = document.querySelector("#burger-menu");
let burgerMenuButton = document.querySelector("#burger-menu__button");
let burgerMenuButtonExit = document.querySelector("#burger-menu__button-exit");

burgerMenuButton.addEventListener("click", function () {
  burgerMenu.classList.remove("burger-menu_inactive");
});
burgerMenuButtonExit.addEventListener("click", function () {
  burgerMenu.classList.add("burger-menu_inactive");
});

let tabs = document.querySelector(".photography-section__content");
let tabButton = document.querySelectorAll(".tab-button");
let tabContents = document.querySelectorAll(".tab-content");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(function (btn) {
      btn.classList.remove("tab-button_active");
    });
  }
  e.target.classList.add("tab-button_active");
  tabContents.forEach(function (content) {
    content.classList.remove("tab-content_active");
  });
  const elem = document.getElementById(id);
  elem.classList.add("tab-content_active");
});

const upBtn = document.querySelector("#up-button");
upBtn.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
