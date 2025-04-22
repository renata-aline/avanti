// LOGIC FOR MOBILE MENU

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

function classAdd(element, targetClass) {
  element.classList.add(targetClass);
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
  classAdd(menuDesktop, "active");
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
              </a>
                     
            `;
      });
      ul.innerHTML = itens;
      listHtml += ul.outerHTML;
    });

    menuList.innerHTML = listHtml;
  }
}
