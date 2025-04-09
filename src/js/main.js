// LOGIC FOR MENU

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// LOGIC FOR INPUTSEARCH

const inputSearch = document.querySelector(".top-bar__search_input");
const searchIcon = document.querySelector(".top-bar__search_icon");
const searchMessage = document.getElementById("searchMessage");

searchIcon.addEventListener("click", () => {
  const produto = inputSearch.value.trim();
  if (produto) {
    searchMessage.textContent = `Você buscou por: "${produto}"`;
    inputSearch.value = "";

    setTimeout(() => {
      searchMessage.textContent = "";
    }, 3000);
  } else {
    searchMessage.textContent = "";
  }
});

// LOGIC FOR SLIDER

const productWrapper = document.querySelector(".store__products");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

btnLeft.addEventListener("click", () => {
  productWrapper.scrollLeft -= 200;
  behavior: "smooth";
});
btnRight.addEventListener("click", () => {
  productWrapper.scrollLeft += 200;
  behavior: "smooth";
});

// LOGIC FOR FORM

const form = document.getElementById("newsletterForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const checkbox = document.getElementById("privacy");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  formMessage.innerText = "";
  formMessage.classList.remove("success", "error");

  if (!name || !email) {
    formMessage.innerText = "Por favor, preencha todos os campos obrigatórios.";
    formMessage.classList.add("error");
    return;
  }

  if (!checkbox.checked) {
    formMessage.innerText = "Por favor, aceite nossa política de privacidade.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.innerText = "Obrigado por se cadastrar!";
  formMessage.classList.add("success");

  setTimeout(() => {
    form.reset();
    formMessage.innerText = "";
    formMessage.classList.remove("success");
  }, 3000);
});

// LOGIC FOR ACCORDION
document
  .querySelectorAll(".site-map__accordion_item-title")
  .forEach((title) => {
    title.addEventListener("click", () => {
      const item = title.parentElement;
      item.classList.toggle("active");
    });
  });
