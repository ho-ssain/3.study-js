const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

const display = (images) => {
  slider.innerHTML = images
    .map(
      (image) => `
    <div class="slide">
      <img src=${image.download_url} alt=${image.id} />
    </div>
  `
    )
    .join("");

  dotsContainer.innerHTML = images
    .map(
      (image, index) => `
    <span class="dot ${index === 0 ? "active" : ""}" data-slide=${index}></span>
  `
    )
    .join("");
};

async function fetchListOfImages() {
  try {
    let response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10",
      {
        method: "GET",
      }
    );
    let result = await response.json();
    if (result && result.length > 0) display(result);
  } catch (error) {
    console.log(error);
  }
}

fetchListOfImages();

// Slider functionality

setTimeout(() => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;

  function activeDot(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));

    const dotToActivate = document.querySelector(`.dot[data-slide='${slide}']`);
    if (dotToActivate) {
      dotToActivate.classList.add("active");
    }
  }

  function changeCurrentSlide(slide) {
    slides.forEach(
      (item, index) =>
        (item.style.transform = `translate(${100 * (index - slide)}%)`)
    );
  }

  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("dot")) {
      const currentSlide = event.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}, 1000);
