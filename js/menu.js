// LOGIC FOR MOBILE MENU

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// LOGIC FOR DESKTOP MENU
let menus = [
  {
    name: "todasCategorias",
    category: "",
    links: [
      {
        links: [
          {
            name: "Cozinha",
            url: "#cozinha",
          },
          {
            name: "Sala",
            url: "#sala",
          },
          {
            name: "Banheiro",
            url: "#banheiro",
          },
          {
            name: "Jardim",
            url: "#jardim",
          },
          {
            name: "Escritório",
            url: "#escritorio",
          },
          {
            name: "Decoração",
            url: "#decoracao",
          },
        ],
      },
    ],
  },

  {
    name: "cozinha",
    category: "Cozinha",
    links: [
      {
        links: [
          {
            name: "Categoria",
            url: "#cozinha",
          },
          {
            name: "cozinha1",
            url: "#teste2",
          },
          {
            name: "cozinha1",
            url: "#teste2",
          },
          {
            name: "cozinha1",
            url: "#teste2",
          },
          {
            name: "cozinha1",
            url: "#teste2",
          },
        ],
      },
      {
        links: [
          {
            name: "categoria",
            url: "#teste1",
          },
          {
            name: "cozinha2",
            url: "#teste2",
          },
          {
            name: "cozinha2",
            url: "#teste1",
          },
          {
            name: "cozinha2",
            url: "#teste2",
          },
        ],
      },
      {
        links: [
          {
            name: "Categoria",
            url: "#teste1",
          },
          {
            name: "cozinha3",
            url: "#teste2",
          },
          {
            name: "cozinha3",
            url: "#teste2",
          },
          {
            name: "cozinha3",
            url: "#teste2",
          },
        ],
      },
    ],
  },

  {
    name: "sala",
    category: "Sala",
    links: [
      {
        links: [
          {
            name: "Categoria",
            url: "#sala",
          },
          {
            name: "sala1",
            url: "#teste2",
          },
          {
            name: "sala1",
            url: "#teste2",
          },
          {
            name: "sala1",
            url: "#teste2",
          },
          {
            name: "sala1",
            url: "#teste2",
          },
        ],
      },
      {
        links: [
          {
            name: "Categoria",
            url: "#sala",
          },
          {
            name: "sala2",
            url: "#teste2",
          },
          {
            name: "sala2",
            url: "#teste2",
          },
          {
            name: "sala2",
            url: "#teste2",
          },
          {
            name: "sala2",
            url: "#teste2",
          },
        ],
      },
      {
        links: [
          {
            name: "Categoria",
            url: "#sala",
          },
          {
            name: "sala3",
            url: "#teste2",
          },
          {
            name: "sala3",
            url: "#teste2",
          },
          {
            name: "sala3",
            url: "#teste2",
          },
          {
            name: "sala3",
            url: "#teste2",
          },
        ],
      },
    ],
  },

  {
    name: "banheiro",
    category: "Banheiro",
    links: [
      {
        links: [
          {
            name: "Categoria",
            url: "#",
          },
          {
            name: "Banheiro1",
            url: "#",
          },
          {
            name: "Banheiro1",
            url: "#",
          },
          {
            name: "Banheiro1",
            url: "#",
          },
          {
            name: "Banheiro1",
            url: "#",
          },
        ],
      },
      {
        links: [
          {
            name: "Categoria",
            url: "#teste1",
          },
          {
            name: "Banheiro2",
            url: "#teste2",
          },
          {
            name: "Banheiro2",
            url: "#teste1",
          },
          {
            name: "Banheiro2",
            url: "#teste2",
          },
        ],
      },
      {
        links: [
          {
            name: "Categoria",
            url: "#teste1",
          },
          {
            name: "Banheiro3",
            url: "#teste2",
          },
          {
            name: "Banheiro3",
            url: "#teste1",
          },
          {
            name: "Banheiro3",
            url: "#teste2",
          },
        ],
      },
    ],
  },
];

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
