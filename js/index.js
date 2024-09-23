// scroll event
document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("nav-container");
  const navOffset = navContainer.offsetTop; 

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > navOffset) {
      navContainer.classList.add("fixed-nav");
    } else {
      navContainer.classList.remove("fixed-nav");
    }
  });
});

