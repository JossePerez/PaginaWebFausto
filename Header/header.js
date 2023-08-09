
window.addEventListener("scroll", function() {
  const header = document.querySelector(".div-header");
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
