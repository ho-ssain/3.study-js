const data = [
  {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: "2",
    question: "Which planet has the most moons in our solar system?",
    answer: "Jupiter",
  },
  {
    id: "3",
    question: "Who was the first president of the United States?",
    answer: "George Washington",
  },
  {
    id: "4",
    question: "What color is the sun?",
    answer: "The sun is yellow.",
  },
  {
    id: "5",
    question: "How many legs does a  spider have?",
    answer: "A spider has eight legs.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
    <div class="accordion_item">
      <div class="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="accordion_content">
        <p>👉 ${dataItem.answer}</p>
      </div>
    </div>
  `
    )
    .join("");
}

createAccordionData();

const getAccordionTitle = document.querySelectorAll(".accordion_title");

getAccordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});
