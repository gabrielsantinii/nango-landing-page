import { closeSideMenu } from "./side-menu.js";

const sectionByLinks = {
  features: {
    links: document.querySelectorAll(".features-link"),
    section: document.querySelector("#features-section"),
  },
  about: {
    links: document.querySelectorAll(".about-link"),
    section: document.querySelector("#about-section"),
  },
  // prices: {
  //   links: document.querySelectorAll(".prices-link"),
  //   section: document.querySelector("#prices-section"),
  // },
  evidences: {
    links: document.querySelectorAll(".evidences-link"),
    section: document.querySelector("#evidences-section"),
  },
  home: {
    links: document.querySelectorAll(".home-link"),
    section: document.querySelector("#home-section"),
  },
};

Object.values(sectionByLinks).forEach(({ links, section }) => {
  links.forEach((linkElement) => {
    linkElement.addEventListener("click", (e) => {
      closeSideMenu();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
