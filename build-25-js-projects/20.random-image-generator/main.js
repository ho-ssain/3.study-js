const imageWrapper = document.querySelector(".image-container");
const loadBtn = document.querySelector(".load");

let count = 1;
// fetching the random images
async function fetchRandomImage(count) {
  console.log("fetching----");
  try {
    for (let index = 0; index < count + 4; index++) {
      const imageElement = document.createElement("img");
      imageElement.src = `https://picsum.photos/300?random=${index}`;
      imageWrapper.appendChild(imageElement);
    }
    // count += 5;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

fetchRandomImage(count);

// load more image ....
loadBtn.addEventListener("click", () => {
  fetchRandomImage((count += 5));
});
