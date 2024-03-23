const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
// setTimeout(() => {
//   h1.textContent = "heading 1";
//   h1.style.color = "red";
//   setTimeout(() => {
//     h2.textContent = "heading 2";
//     h2.style.color = "green";
//     setTimeout(() => {
//       h3.textContent = "heading 3";
//       h3.style.color = "blue";
//       setTimeout(() => {
//         h4.textContent = "heading 4";
//         h4.style.color = "orange";
//         setTimeout(() => {
//           h5.textContent = "heading 5";
//           h5.style.color = "purple";
//           setTimeout(() => {
//             h6.textContent = "heading 6";
//             h6.style.color = "violet";
//             setTimeout(() => {
//               h7.textContent = "heading 7";
//               h7.style.color = "yellow";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const changeText = (elm, txt, clr, t) => {
  setTimeout(() => {
    if (elm) {
      elm.textContent = txt;
      elm.style.color = clr;
    } else {
      console.log("Your element does not exist.");
    }
  }, t);
};

changeText(h1, "one", "red", 2000);
