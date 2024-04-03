const container = document.querySelector(".container");
const tabBtn = document.querySelectorAll(".tab-button");
const content = document.querySelectorAll(".content");

container.addEventListener("click", (e) => {
  console.log(e.target.dataset);
  const currentId = e.target.dataset.id;
  if (currentId) {
    tabBtn.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    content.forEach((item) => item.classList.remove("active"));
    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
