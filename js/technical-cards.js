const technicalDescriptionCards = document.querySelectorAll(
  ".technical-description-card"
);
const cardsWrapper = document.querySelector(".technical-description-card");

function setDefaultActiveCard() {
  inactiveAllCards();
  technicalDescriptionCards.forEach((card) => {
    if (card.id === defaultActiveCard) {
      addActiveClass(card);
    }
  });
}

function inactiveAllCards() {
  technicalDescriptionCards.forEach((card) =>
    card.classList.remove("technical-description-card-active")
  );
}

function addActiveClass(element) {
  element?.classList?.add?.("technical-description-card-active");
}

function cardListener(event) {
  inactiveAllCards();
  addActiveClass(event.target);
}

function registerActiveCardListener(cardElement) {
  console.log("Registering mouseover event on: ", cardElement);
  return cardElement.addEventListener("mouseover", cardListener);
}

const defaultActiveCard = "sevidor-em-nuvem-card";

setDefaultActiveCard();
technicalDescriptionCards.forEach(registerActiveCardListener);
