const paginationList = document.querySelector(".pagination-list");
const paginationNumbers = document.querySelector(".pagination-numbers");
const previousBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
//
//
// fetching the data.........................

const display = (data) => {
  paginationList.innerHTML = data.products
    .map(
      (product) => `
    <li class="item">${product.title}</li>
  `
    )
    .join("");
};

async function fetchData() {
  const url = "https://dummyjson.com/products?limit=100";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP error!");
    const data = await response.json();
    display(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();

setTimeout(() => {
  //
  //
  // create pagination number ......................

  const extractAllListItems = document.querySelectorAll("li");
  let paginationLimit = 10;
  let pageCount = Math.ceil(extractAllListItems.length / paginationLimit);
  let currentPage = 1;

  const createPageNumber = (currentIndex) => {
    const pageNum = document.createElement("button");
    pageNum.classList.add("btn");
    pageNum.textContent = currentIndex;
    pageNum.setAttribute("page-index", currentIndex);
    paginationNumbers.appendChild(pageNum);
  };

  function createPagination() {
    for (let i = 1; i <= pageCount; i++) {
      createPageNumber(i);
    }
  }
  createPagination();

  //
  //
  // handle current page.................................

  function handleActivePageNumber() {
    const allButtons = document.querySelectorAll(".pagination-numbers .btn");

    allButtons.forEach((btn) => {
      btn.classList.remove("active");
      const index = parseInt(btn.getAttribute("page-index"));
      if (currentPage === index) {
        btn.classList.add("active");
      }
      if (index) {
        btn.addEventListener("click", () => {
          handleCurrentPage(index);
        });
      }
    });
  }
  function handlePaginationButtonStatus() {
    if (currentPage === 1) {
      previousBtn.disabled = true;
      nextBtn.disabled = false;
    } else if (currentPage === pageCount) {
      previousBtn.disabled = false;
      nextBtn.disabled = true;
    } else {
      previousBtn.disabled = false;
      nextBtn.disabled = false;
    }
  }

  function handleCurrentPage(currentPageNum) {
    currentPage = currentPageNum;

    const getPreviousRange = (currentPage - 1) * paginationLimit;
    const getNextRange = currentPage * paginationLimit;

    extractAllListItems.forEach((item, index) => {
      item.classList.add("hide-item");
      if (index >= getPreviousRange && index < getNextRange) {
        item.classList.remove("hide-item");
      }
    });

    handleActivePageNumber();
    handlePaginationButtonStatus();
  }
  handleCurrentPage(1);

  //
  //
  // Event Listeners................................

  previousBtn.addEventListener("click", () =>
    handleCurrentPage(currentPage - 1)
  );
  nextBtn.addEventListener("click", () => handleCurrentPage(currentPage + 1));
}, 1000);
