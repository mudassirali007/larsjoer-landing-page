const swapBottom = document.getElementById("swapBottom");
const swapTop = document.getElementById("swapTop");
const swapReset = document.getElementById("swapReset");
const mediaQuery = window.matchMedia("(max-width: 767px)");

new ResizeObserver(() => {
  console.log("observer works");
  if (mediaQuery.matches) {
    // If media query matches swap
    swapBottom.parentNode.insertBefore(swapTop, swapBottom.parentNode.lastChild.previousSibling);
    return;
  }
  if (!mediaQuery.matches) {
    console.log("Ok");
    swapReset.parentNode.insertBefore(swapTop, swapReset.parentNode.lastChild);
    return;
  }
}).observe(document.body);
