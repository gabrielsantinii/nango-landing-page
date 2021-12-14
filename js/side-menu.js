const closeMenuElement = document.querySelector("#close-icon-menu");
const sideMenuElement = document.querySelector(".side-menu-container");
const burguerMenElement = document.querySelector("#burger-menu");
const mainElement = document.querySelector("main");

function triggerSideMenu(menuElement) {
  if (menuElement.classList.contains("side-menu-container-active")) {
    console.log("Inactivating menu");
    menuElement.classList.remove("side-menu-container-active");
    return;
  }
  console.log("Activating menu");
  menuElement.classList.add("side-menu-container-active");
}

closeMenuElement.addEventListener("click", () => {
  console.log("Close menu clicked");
  triggerSideMenu(sideMenuElement);
});

burguerMenElement.addEventListener("click", () => {
  console.log("Burguer menu clicked");
  triggerSideMenu(sideMenuElement);
});

mainElement.addEventListener("click", () => {
  sideMenuElement.classList.remove("side-menu-container-active");
});
