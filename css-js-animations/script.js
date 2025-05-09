const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const rememberCheckbox = document.getElementById("rememberAnimation");

// Trigger animation
animateBtn.addEventListener("click", () => {
  box.classList.remove("animated"); // Reset
  void box.offsetWidth; // Reflow to restart animation
  box.classList.add("animated");

  if (rememberCheckbox.checked) {
    localStorage.setItem("boxAnimated", "true");
  } else {
    localStorage.removeItem("boxAnimated");
  }
});

// Check localStorage on load
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("boxAnimated") === "true") {
    box.classList.add("animated");
    rememberCheckbox.checked = true;
  }
});
