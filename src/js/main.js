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
