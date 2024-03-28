const content = document.querySelector(".content");
const loader = document.querySelector(".loader");
const progressBar = document.querySelector(".progress-bar");

const showLoader = () => {
  loader.classList.add("show");
  content.classList.add("hide");
};
const removeLoader = () => {
  loader.classList.remove("show");
  content.classList.remove("hide");
};

const displayData = (res) => {
  const recipes = res.recipes;
  if (recipes) {
    removeLoader();
    content.innerHTML = recipes
      .map(
        (recipe) => `
    <div class='recipe'>
      <h2>${recipe.name}</h2>
      <p><span>Ingredients:</span> ${recipe.ingredients.join(", ")}</p>
      <p><span>instructions:</span> ${recipe.instructions}</p>
    </div>
  `
      )
      .join("");
  }
};

const handleScroll = () => {
  const getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  console.log("🚀 ~ handleScroll ~ height:", height);
  const scrolled = (getScrollFromTop / height) * 100;

  progressBar.style.width = `${scrolled}%`;
};

(async function fetchData() {
  showLoader();
  await fetch("https://dummyjson.com/recipes?limit=70")
    .then((res) => res.json())
    .then(displayData);
})();

window.onscroll = function () {
  handleScroll();
};
