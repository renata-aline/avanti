// LOGIC FOR SLIDER

const productWrapper = document.querySelector(".store__products");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

btnLeft.addEventListener("click", () => {
  productWrapper.scrollLeft -= 176;
  behavior: "smooth";
});
btnRight.addEventListener("click", () => {
  productWrapper.scrollLeft += 176;
  behavior: "smooth";
});
