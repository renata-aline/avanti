// LOGIC FOR SLIDER

const productWrapper = document.querySelector(".store__products");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

const resizeObserver = new ResizeObserver((entries) => {
  const card = productWrapper.firstElementChild;
  const cardWidth = card.offsetWidth + 8;
  console.log(cardWidth);
  btnLeft.addEventListener("click", () => {
    productWrapper.scrollLeft -= cardWidth;
  });
  btnRight.addEventListener("click", () => {
    productWrapper.scrollLeft += cardWidth;
  });
});

resizeObserver.observe(productWrapper);
