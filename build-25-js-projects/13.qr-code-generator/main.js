const qrContainer = document.querySelector(".qr-container");
const qrText = document.querySelector(".qr-text");
const btn = document.querySelector(".btn");
const errorMessage = document.querySelector(".error-mess");

const generateQRCOde = () => {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: 400,
    width: 400,
    colorDark: "#000",
    colorLight: "#fff",
  });

  qrText.value = "";
  errorMessage.textContent = "";
};

const validateInputField = () => {
  if (qrText.value.trim().length > 0) {
    generateQRCOde();
  } else {
    errorMessage.textContent = "🚫!! Enter text or use some url!";
  }
};

btn.addEventListener("click", () => {
  validateInputField();
});
