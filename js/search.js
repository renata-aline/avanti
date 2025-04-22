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
