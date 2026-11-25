const modal = document.querySelector(".backdrop");
const modalOpenButton = document.querySelector(".modal-open-button");
const modalCloseButton = document.querySelector(".modal-close-button");

const targetModel = () => modal.classList.toggle("is-hidden");

modalOpenButton.addEventListener("click", targetModel);
modalCloseButton.addEventListener("click", targetModel);
