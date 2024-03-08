"use strict";
//selecting elements
const formEl = document.getElementById("form");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmPassword");
const messageEl = document.getElementById("Message");
const messageContainerEl = document.querySelector(".message-container");
let isValid = false;
let passwordMatch = false;

function validateForm() {
  // using constraint API  checkValidity() checks if the form is valid or not a return a boolean .
  isValid = formEl.checkValidity();
  console.log(isValid);
  // to generate an error message
  if (!isValid) {
    messageEl.textContent = "please fill out all fields !";
    messageEl.style.color = "red";
    messageEl.style.borderColor = "red";
  }
  //   to check if 2 password is the same or not.
  if (passwordEl.value === confirmPasswordEl.value) {
    passwordMatch = true;
    passwordEl.style.borderColor = "green";
    confirmPasswordEl.style.borderColor = "green";
    return; // if this was wrong it stops executing the rest of the code.
  } else {
    passwordMatch = false;
    messageEl.textContent = "Make Sure password match";
    messageEl.style.color = "red";
    messageEl.style.borderColor = "red";
    passwordEl.style.borderColor = "red";
    confirmPasswordEl.style.borderColor = "red";
  }
}
// we wanna to store date frome the each input fields by using (name) property it stor as name / value pairs .
function storeFormData() {
  const user = {
    name: formEl.name.value,
    phone: formEl.phone.value,
    email: formEl.email.value,
    password: formEl.password.value,
  };
  // console.log(user);
}
function processForm(e) {
  e.preventDefault();
  validateForm();
  // submit if valid
  if (isValid && passwordMatch) {
    messageEl.textContent = "Successfully Registered";
    messageEl.style.color = "green";
    messageEl.style.borderColor = "green";
    storeFormData();
  }
}

// Event listeners
formEl.addEventListener("submit", processForm);
