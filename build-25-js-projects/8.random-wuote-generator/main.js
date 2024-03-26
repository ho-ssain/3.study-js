const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".refresh-btn");
const loader = document.querySelector(".loader");

const showLoader = () => {
  loader.classList.add("show");
  quoteWrapper.classList.add("hide");
};
const removeLoader = () => {
  loader.classList.remove("show");
  quoteWrapper.classList.remove("hide");
};

const displayQuote = (quote) => {
  quoteWrapper.innerHTML = `
    <div className="quote-item">
      <p class="text" >${quote.quote}</p>
      <span class="author"> - ${quote.author}</span>
    </div>
  `;
};

// fetching the  data from api and displaying it in the page

async function fetchQuoteFromApi() {
  const url = "https://dummyjson.com/quotes/random";

  const options = {
    method: "GET",
  };

  try {
    showLoader();
    const response = await fetch(url, options);
    const result = await response.json();
    if (result) {
      removeLoader();
      displayQuote(result);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchQuoteFromApi();

// refresh quote
refreshBtn.addEventListener("click", () => {
  fetchQuoteFromApi();
});
