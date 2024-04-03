const themeBtn = document.querySelector(".theme-btn");
const body = document.querySelector("body");

// we can do this in multiple ways

/* 
// 1. by class name
themeBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});

 */

// 2. data-theme property
themeBtn.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark")
    body.removeAttribute("data-theme");
  else body.setAttribute("data-theme", "dark");
});
