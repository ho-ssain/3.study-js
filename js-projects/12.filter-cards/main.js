const filterButtons = document.querySelector(".filter-buttons-wrapper");
const content = document.querySelector(".content");

// creating category
const displayCategory = (res) => {
  // console.log(res);
  res.forEach((cat) => {
    const btn = document.createElement("button");
    btn.innerText = cat.toUpperCase();
    btn.classList.add("filter-btn");
    btn.setAttribute("data-filter", cat);
    filterButtons.appendChild(btn);
  });
};

async function createCategory() {
  const url = "https://dummyjson.com/products/categories";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    displayCategory(result);
  } catch (error) {
    console.error(error);
  }
}

createCategory();
//.................................................

// creating content
const displayContent = (items) => {
  // console.log(items.products);
  items.products.forEach((item) => {
    const singleContentCard = document.createElement("div");
    singleContentCard.classList.add("card", item.category);
    singleContentCard.textContent = item.title;
    content.appendChild(singleContentCard);
  });
};

async function createContent() {
  const url = "https://dummyjson.com/products?limit=50";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    displayContent(result);
  } catch (error) {
    console.error(error);
  }
}

createContent();
//.................................................

// filtering
setTimeout(() => {
  const allFilterBtns = document.querySelectorAll(".filter-btn");
  const allCards = document.querySelectorAll(".card");

  const filterCardsByCategory = (extractCategory, allCards) => {
    allCards.forEach((item) => {
      const isShowAllCards = extractCategory.toLowerCase() === "all";
      const isFiltered = !item.classList.contains(extractCategory);

      if (isFiltered && !isShowAllCards) item.classList.add("hide");
      else item.classList.remove("hide");
    });
  };

  allFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const extractCategory = btn.dataset.filter;
      filterCardsByCategory(extractCategory, allCards);
    });
  });
}, 1000);
