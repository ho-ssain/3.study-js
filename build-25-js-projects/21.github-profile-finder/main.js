const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const profileArea = document.querySelector(".profile-area");
const loadingMessage = document.querySelector(".loading-message");

const displayUserData = (data) => {
  removeLoader();
  profileArea.innerHTML = `
      <img src=${data.avatar_url} alt=${data.login} />
      <p>${data.name}</p>
      <p>${data.bio}</p>
    `;
};

const showLoader = () => {
  loadingMessage.classList.add("show");
  profileArea.classList.add("hide");
};
const removeLoader = () => {
  loadingMessage.classList.remove("show");
  profileArea.classList.remove("hide");
};

async function fetchGithubProfileDetails() {
  showLoader();
  const url = "https://api.github.com/users/";

  try {
    const response = await fetch(url + searchInput.value);
    if (!response.ok) throw new Error("Could not find user");
    else {
      const data = await response.json();
      displayUserData(data);
    }
  } catch (error) {
    removeLoader();
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Error: ${error.message}`;
    profileArea.appendChild(errorMessage);
  }
}

searchBtn.addEventListener("click", fetchGithubProfileDetails);
