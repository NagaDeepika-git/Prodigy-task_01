window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#4caf50"; // Green
  } else {
    navbar.style.backgroundColor = "#2196f3"; // Blue
  }
});
