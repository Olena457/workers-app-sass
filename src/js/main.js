import "../scss/main.scss";
// import * as bodyScrollLock from "body-scroll-lock";

// Sidebar menu
const refsMenu = {
  openMenuBtn: document.querySelector(".js-menu-open"),
  closeMenuBtn: document.querySelector(".js-menu-close"),
  overlayMenu: document.querySelector(".js-menu"),
};

const toggleMenu = () => {
  const isMenuOpen =
    refsMenu.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  refsMenu.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  refsMenu.overlayMenu.classList.toggle("is-open");

  constScrollLockMethod = !isMenuOpen
    ? "disableBodyScroll"
    : "enableBodyScroll";
  bodyScrollLock[scrollLockMethod](document.body);
};

refsMenu.openMenuBtn.addEventListener("click", toggleMenu);
refsMenu.closeMenuBtn.addEventListener("click", toggleMenu);

// Close modal menu  on winder screens if the device orientation changes
window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
  if (!e.matches) return;

  refsMenu.overlayMenu.classList.remove("is-open");
  refsMenu.openMenuBtn.setAttribute("aria-expanded", false);
  bodyScrollLock.enableBodyScroll(document.body);
});
