const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Not Found!");
      }
    }, time);
  });
}

changeText(h1, "One", "red", 1000)
  .then(() => changeText(h2, "Two", "green", 1000))
  .then(() => changeText(h3, "Three", "blue", 1000))
  .then(() => changeText(h4, "Four", "purple", 1000))
  .then(() => changeText(h5, "Five", "#aa1122", 1000))
  .then(() => changeText(h6, "Six", "yellow", 1000))
  .then(() => changeText(h7, "Seven", "orange", 1000))
  .catch((err) => console.log(err));
