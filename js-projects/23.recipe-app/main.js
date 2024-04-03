const recipeList = document.querySelector(".recipe-list");
const recipeDetails = document.querySelector(".recipe-details");
const loader = document.querySelector(".loader");

// loader function

function showLoader() {
  loader.classList.add("show");
  recipeList.classList.add("hide");
}
function hideLoader() {
  loader.classList.remove("show");
  recipeList.classList.remove("hide");
}

// displaying the data
function showRecipeList(recipes) {
  recipeList.innerHTML = recipes
    .map(
      (recipe) => `
    <div class='recipe-item'>
      <p class='recipe-name'>${recipe.name}</p>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.id}"/>
      <p class='recipe-cuisine'>Cuisine: ${recipe.cuisine}</p>
      <div class='recipe-ingredients'>
        <span style="text-decoration: underline;">Ingredients:</span>
        ${recipe.ingredients
          .map(
            (ingredient) => `
          <span class='ingredient'>${ingredient}</span>
        `
          )
          .join("")}
      </div>
      <p class='meal-type'>MealType: ${recipe.mealType}</p>
      <p>Rating: 
      <span class='rating'>${recipe.rating}</span></p>
      <button class='details-btn' data-id='${recipe.id}'>Details</button>
    </div>
  `
    )
    .join("");
}

// fetching the data
async function fetchRecipesFromAPi() {
  showLoader();
  const url = "https://dummyjson.com/recipes";
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) throw new Error("HTTP error!");
    const data = await response.json();
    if (data?.recipes) {
      hideLoader();
      showRecipeList(data.recipes);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

fetchRecipesFromAPi();

// event listeners
setTimeout(() => {
  const detailsBtns = document.querySelectorAll(".details-btn");

  detailsBtns.forEach((btn) => {
    const id = btn.getAttribute("data-id");
    btn.addEventListener("click", async () => {
      const url = `https://dummyjson.com/recipes/${id}`;
      try {
        const res = await fetch(url, { method: "GET" });
        if (!res.ok) throw new Error("HTTP error!");
        const singleRecipeData = await res.json();
        if (singleRecipeData) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });

          recipeDetails.innerHTML = singleRecipeData.name;
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  });
}, 1000);
