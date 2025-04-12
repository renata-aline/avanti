// LOGIC FOR MENU

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// LOGIC FOR DESKTOP MENU
let menus = [];
fetch("/src/js/menu.json")
  .then((response) => response.json())
  .then((data) => {
    menus = data.categories;
  })
  .catch((error) => {
    console.error("Error fetching menu.json:", error);
  });
const menuDesktop = document.getElementById("menuDesktop");
const menuList = document.getElementById("menulists");

const menuCategoryTitle = document.getElementById("menuCategoryTitle");

function classToggle(element, targetClass) {
  element.classList.toggle(targetClass);
}

document.addEventListener("click", function (event) {
  const isClickInside = menuDesktop.contains(event.target);
  const isClickListNav = event.target.classList.contains(
    "menu__nav_list-item-link"
  );

  if (
    !isClickInside &&
    !isClickListNav &&
    menuDesktop.classList.contains("active")
  ) {
    menuDesktop.classList.remove("active");
  }
});

function renderMenu(item) {
  classToggle(menuDesktop, "active");
  const listMenu = menus.filter((menu) => {
    return menu.name === item;
  });

  let listHtml = "";
  if (listMenu.length > 0) {
    menuCategoryTitle.innerHTML = listMenu[0].category;
    listMenu[0].links.forEach((menu) => {
      const ul = document.createElement("ul");
      ul.className = "menu-desktop__items_list";
      let itens = "";

      menu.links.forEach((link, index) => {
        itens += `
            <li class="menu-desktop__items_list-item"><a href="${
              link.url
            }" class="menu-desktop__items_list-item--link ${
          index === 0 ? "menu-desktop__items_list-item--link--active" : ""
        }">
              ${link.name}
            </a></li>
          `;
      });
      ul.innerHTML = itens;
      listHtml += ul.outerHTML;
    });

    menuList.innerHTML = listHtml;
  }
}
// LOGIC FOR SEARCH

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
  productWrapper.scrollLeft -= 176;
  behavior: "smooth";
});
btnRight.addEventListener("click", () => {
  productWrapper.scrollLeft += 176;
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
