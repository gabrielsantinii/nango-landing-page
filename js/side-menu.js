const closeMenuElement = document.querySelector("#close-icon-menu");
const sideMenuElement = document.querySelector(".side-menu-container");
const burguerMenElement = document.querySelector("#burger-menu");
const mainElement = document.querySelector("main");

export function closeSideMenu() {
  if (verifySideMenuIsOpen()) {
    sideMenuElement.classList.remove("side-menu-container-active");
  }
}

export function openSideMenu() {
  if (!verifySideMenuIsOpen()) {
    sideMenuElement.classList.add("side-menu-container-active");
  }
}

function verifySideMenuIsOpen() {
  return sideMenuElement.classList.contains("side-menu-container-active");
}

export function triggerSideMenu() {
  if (verifySideMenuIsOpen()) {
    closeSideMenu();
    return;
  }
  openSideMenu();
}

closeMenuElement.addEventListener("click", () => {
  console.log("Close menu clicked");
  triggerSideMenu();
});

burguerMenElement.addEventListener("click", () => {
  console.log("Burguer menu clicked");
  triggerSideMenu();
});

mainElement.addEventListener("click", () => {
  sideMenuElement.classList.remove("side-menu-container-active");
});
