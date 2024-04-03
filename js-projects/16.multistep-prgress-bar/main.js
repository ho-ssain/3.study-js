console.log("Script is running");

const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const iconWrapper = document.querySelectorAll(".icon-wrapper");

let currentStep = 1;

const handleUpdateStep = () => {
  iconWrapper.forEach((item, index) => {
    if (index < currentStep) item.classList.add("active");
    else item.classList.remove("active");
  });

  progress.style.width =
    ((currentStep - 1) / (iconWrapper.length - 1)) * 100 + "%";

  if (currentStep === 1) prevBtn.disabled = true;
  else if (currentStep === iconWrapper.length) nextBtn.disabled = true;
  else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

nextBtn.addEventListener("click", () => {
  if (currentStep < iconWrapper.length) {
    currentStep++;
  }
  handleUpdateStep();
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 1) currentStep--;
  handleUpdateStep();
});
