// menu
const menuBtn = document.querySelector(".navbar__icon");
const menu = document.querySelector(".navbar__menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("toggler");
  menuBtn.classList.toggle("menu");
});

// services
const services = [...document.querySelectorAll(".services__nav__link")];
const servicesTab = [...document.querySelectorAll(".servicesTab__item")];

services.forEach((item) => {
  item.addEventListener("click", () => {
    render(item.dataset.id);
  });
});

function render(id) {
  services.forEach((item) => {
    item.classList.remove("services--selected");
    if (item.dataset.id === id) {
      item.classList.add("services--selected");
    }
  });

  servicesTab.forEach((item) => {
    item.classList.remove("servicesTab--selected");
    if (item.id === id) {
      item.classList.add("servicesTab--selected");
    }
  });
}

// accordion
const accordion = [...document.querySelectorAll(".accordion__box")];
accordion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("accordion__active");
  });
});
