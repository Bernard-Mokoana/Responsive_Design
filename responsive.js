function updateBreakpointIndicator() {
  const indicator = document.querySelector(".breakpoint-indicator");
  const width = window.innerWidth;

  if (width >= 1440) {
    indicator.style.background = "#4caf50";
  } else if (width > 1024) {
    indicator.style.background = "#2196f3";
  } else if (width >= 768) {
    indicator.style.background = "#ff9800";
  } else {
    indicator.style.background = "#f44336";
  }
}

// Update indicator on resize
window.addEventListener("resize", updateBreakpointIndicator);
updateBreakpointIndicator();

let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  document.body.style.outline = "3px solid #667eea";

  resizeTimeout = this.setTimeout(() => {
    this.document.body.style.outline = "none";
  }, 500);
});
