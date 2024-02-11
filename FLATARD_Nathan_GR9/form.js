// succès ou erreur
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");
  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let nom = document.querySelector("#nom");
  if (nom.value.length < 1) {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le nom doit avoir au moins 1 caractère";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let prenom = document.querySelector("#prenom");
  if (prenom.value.length < 1) {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le prénom doit avoir au moins 1 caractère";

    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    nom.classList.contains("success") &&
    prenom.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

const themebutton = document.querySelector(".themebutton");
themebutton.addEventListener("click", () => {
  const body = document.body;

  body.classList.toggle("dark");
});
