const labels = document.querySelectorAll(".label");
labels.forEach((label) => {
  label.addEventListener("click", () => {
    const height = label.nextElementSibling.scrollHeight;
    label.classList.toggle("active-header");
    if (label.classList.contains("active-header")) {
      label.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      label.nextElementSibling.style.maxHeight = 0;
    }
  });
});
