const d = document;

function validationForm() {
  const $inputEmail = d.querySelector('input[type="email"]'),
    $invalidEmail = d.querySelector(".valid__email"),
    expReg = new RegExp(
      "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
    );

  d.addEventListener("keyup", (e) => {
    let users = e.target.value;

    if (expReg.test(users)) {
      $inputEmail.classList.remove("input--invalid");
      $invalidEmail.style.display = "none";

      console.log("Correcto");
    } else {
      $inputEmail.classList.add("input--invalid");
      $invalidEmail.style.display = "inline";
    }
  });
}

validationForm();

const $containerSucces = d.querySelector(".container__succes"),
  $containerForm = d.querySelector(".container__form"),
  $form = d.querySelector(".form"),
  $btnSucces = d.querySelector(".succes__btn");

d.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Enviar");

  $containerForm.classList.toggle("container__form--disabled");
  $containerSucces.classList.toggle("container__succes--disabled");
});

$btnSucces.addEventListener("click", (e) => {
  $form.reset();
  $containerForm.classList.toggle("container__form--disabled");
  $containerSucces.classList.toggle("container__succes--disabled");
});
