const anchorElements = document.querySelectorAll("a");

anchorElements.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    console.log(e)
    e.preventDefault();
  });
});