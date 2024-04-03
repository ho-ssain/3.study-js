const stars = document.querySelectorAll(".fa-star-o");
const ratingValueText = document.querySelector(".selected-rating-value");

let currentTotalSelectedStars = -1;

const handleMouseOver = (event) => {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdateRatingState(currentRatingValue);
};

const handleUpdateRatingState = (getCurrentRatingValue) => {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue)
      stars[i].classList.replace("fa-star-o", "fa-star");
    else stars[i].classList.replace("fa-star", "fa-star-o");
  }
};

const handleClick = (event) => {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRatingState(currentTotalSelectedStars);
  ratingValueText.textContent = currentTotalSelectedStars;
};

const handleMouseleave = (event) => {
  handleUpdateRatingState(currentTotalSelectedStars);
};

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleClick);
  starItem.addEventListener("mouseleave", handleMouseleave);
});
