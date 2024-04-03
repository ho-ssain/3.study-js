const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more");

let currentStep = 0;

//---------------------------------------------------

const displayProducts = (products) => {
  products.forEach((product) => {
    const productItemWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");

    productTitle.textContent = product.title;
    productDescription.textContent = product.description;
    productThumbnail.src = product.thumbnail;
    productPrice.textContent = `Tk.${product.price}`;

    productTitle.classList.add("product-title");
    productDescription.classList.add("product-description");
    productThumbnail.classList.add("product-img");
    productPrice.classList.add("product-price");
    productItemWrapper.classList.add("product-item-wrapper");

    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productDescription);
    productItemWrapper.appendChild(productPrice);
    productsContainer.appendChild(productItemWrapper);
  });

  if (productsContainer.children.length === 100) {
    loadMoreBtn.setAttribute("disabled", "true");
  }
};

async function fetchProducts(getCurrentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      }`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (result && result.products) displayProducts(result.products);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts(currentStep);

//------------------------------------------------------

loadMoreBtn.addEventListener("click", () => {
  fetchProducts(currentStep++);
});
