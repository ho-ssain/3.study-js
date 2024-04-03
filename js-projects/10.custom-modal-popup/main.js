const openModelBtn = document.querySelector(".open-model-btn");
const modelBackground = document.querySelector(".model-background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close");

openModelBtn.addEventListener("click", () => {
  modelBackground.style.display = "block"; // show the modal background
});

closeIcon.addEventListener("click", () => {
  modelBackground.style.display = "none"; // hide the modal background when click on X icon
});

closeBtn.addEventListener("click", () => {
  modelBackground.style.display = "none"; // hide the modal background when click on X icon
});

window.addEventListener("click", (e) => {
  if (e.target === modelBackground) {
    modelBackground.style.display = "none";
  }
});
