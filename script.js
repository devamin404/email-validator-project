const textInput = document.querySelector("#name-content");
const phoneInput = document.querySelector("#phone-content");
const emailInput = document.querySelector("#email-content");
const textMessage = document.querySelector(".text-message");
const form = document.querySelector("form");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const phoneError = document.querySelector(".phone-error");
const messageError = document.querySelector(".message-error");
const submitError = document.querySelector(".submit-error");

function nameValidation() {
  let value = textInput.value.trim();
  if (value.length == 0) {
    nameError.textContent = "Name is required";
    nameError.style.color = "red";
    return false;
  }

  if (!value.match(/^[A-Za-z]+(\s+[A-Za-z]+)+$/)) {
    nameError.textContent = "Write full name";
    nameError.style.color = "red";

    return false;
  }
  nameError.innerHTML = "<i class= 'fa-solid fa-circle-check'></i>";
  nameError.style.color = "green";
  return true;
}

textInput.addEventListener("keyup", nameValidation);

function phoneValidation() {
  let phone = phoneInput.value.trim();

  if (phone.length == 0) {
    phoneError.textContent = "Phone is required";
    phoneError.style.color = "red";
    return false;
  }

  if (!phone.match(/^[0-9]*$/)) {
    phoneError.textContent = "Only digits please";
    phoneError.style.color = "red";
    return false;
  }

  if (phone.length !== 11) {
    phoneError.textContent = "Phone no should be 11 digits";
    phoneError.style.color = "red";
    return false;
  }

  phoneError.innerHTML = "<i class= 'fa-solid fa-circle-check'></i>";
  phoneError.style.color = "green";
  return true;
}

phoneInput.addEventListener("keyup", phoneValidation);

function emailValidation() {
  let email = emailInput.value.trim();
  if (email.length == 0) {
    emailError.textContent = "E-mail is required";
    emailError.style.color = "red";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.textContent = "Invalid e-mail";
    emailError.style.color = "red";

    return false;
  }
  emailError.innerHTML = "<i class= 'fa-solid fa-circle-check'></i>";
  emailError.style.color = "green";
  return true;
}

emailInput.addEventListener("keyup", emailValidation);

function textValidation() {
  let msg = textMessage.value;
  let required = 30;
  let left = required - msg.length;

  if (left > 0) {
    messageError.textContent = `You have ${left} more characters to write`;
    return false;
  }
  messageError.innerHTML = "<i class= 'fa-solid fa-circle-check'></i>";
  messageError.style.color = "green";
  return true;
}

textMessage.addEventListener("keyup", textValidation);

function formValidation(e) {

  if (
    !nameValidation() ||
    !phoneValidation() ||
    !emailValidation() ||
    !textValidation()
  ) {
    e.preventDefault();
    submitError.textContent = "Please fill the form properly";
    submitError.style.color = "Red";
    return false;
  }
}

form.addEventListener("submit", formValidation);
