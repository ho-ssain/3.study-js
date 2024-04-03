const data = document.querySelector(".data");
const scrollTopButton = document.querySelector(".scroll-top");
const scrollBottomButton = document.querySelector(".scroll-bottom");
const loader = document.querySelector(".loader");

// loading function
const showLoader = () => {
  loader.classList.add("show");
  data.classList.add("hide");
};
const removeLoader = () => {
  loader.classList.remove("show");
  data.classList.remove("hide");
};

//....fetching and displaying data.......
const displayData = (res) => {
  removeLoader();
  // console.log(res);
  const users = res.users;
  // console.log(users);

  data.innerHTML = users
    .map(
      (user) => `
    <p>${user.username}</p>
  `
    )
    .join("");
};

async function fetchUser() {
  showLoader();
  await fetch("https://dummyjson.com/users?limit=100", {
    method: "GET",
  })
    .then((res) => res.json())
    .then(displayData);
}

fetchUser();

// scroll-bottom
scrollBottomButton.addEventListener("click", () =>
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
);

// scroll-up
scrollTopButton.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
