const navbar = document.querySelector(".navbar");
const topPos = navbar.offsetTop;

window.onscroll = () => {
  handleStickyNavbarOnScroll();
};

function handleStickyNavbarOnScroll() {
  if (window.scrollY >= topPos) navbar.classList.add("fixed-navbar");
  else navbar.classList.remove("fixed-navbar");
}
