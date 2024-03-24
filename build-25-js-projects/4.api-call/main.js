const postListContainer = document.querySelector(".post-list-container");

// fetch data using XHR
function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  // set up request
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  // handle response
  xhr.onload = () => {
    if (xhr.status === 200) {
      displayPosts(xhr.response);
    } else {
      console.error(`Error: ${xhr.status}`);
    }
  };
} // ================================

// using fetch method
function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => {
      displayPosts(result);
    })
    .catch((err) => {
      console.log(err);
    });
} // =================================

// using async-await
async function fetchUsingAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    const result = await response.json();
    displayPosts(result);
  } catch (error) {
    console.log(error);
  }
} // ===============================

// using both XHR and Async-await
const helperMethod = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    // handle response
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
};

async function fetchUsingXHRAsyncAwait() {
  try {
    const response = await helperMethod(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    displayPosts(response);
  } catch (error) {
    console.error(error);
  }
} // ===============================

//  Displaying the data in HTML
function displayPosts(data) {
  postListContainer.innerHTML = data
    .map(
      (postItem) => `
    <div class="post-item">
      <h3>${postItem.title}</h3>
      <p>${postItem.body}</p>
    </div>
  `
    )
    .join("");
} // ====================================

// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwait();
fetchUsingXHRAsyncAwait();
