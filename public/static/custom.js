
console.log("Hello from the startup!!!!");

// This fires every time a new page is loaded via SPA routing
document.addEventListener("nav", () => {
  console.log("Navigated to a new page!");
});