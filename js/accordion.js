// LOGIC FOR ACCORDION
document
  .querySelectorAll(".site-map__accordion_item-title")
  .forEach((title) => {
    title.addEventListener("click", () => {
      const item = title.parentElement;
      item.classList.toggle("active");
    });
  });
