// ----------------===========-------------
// ----> HEX color generator
// ----------------===========-------------

const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".copy-hex");

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
    // console.log(hexColorOutput);
  }

  hexColorValue.textContent = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
});

// copy to clipboard (Hex color)
function copyHexColorToClipboard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color copied to clipboard!👍");
}
hexCopyBtn.addEventListener("click", copyHexColorToClipboard);

// ----------------===========-------------
// ----> RGB color generator
// ----------------===========-------------

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".copy-rgb");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});

// copy to clipboard (RGB color)

function copyRGBColorToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB color copied to clipboard! 👍");
}
rgbCopyBtn.addEventListener("click", copyRGBColorToClipboard);
