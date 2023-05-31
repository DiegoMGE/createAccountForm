const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const pwdConfirmation = document.getElementById("passwordC");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = pwd.value.trim();
  const pwdConfirmationValue = pwdConfirmation.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "email cannot be blank");
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, "Not a valid email.");
  } else {
    setSuccessFor(email);
  }
  if (pwdValue === "") {
    setErrorFor(pwd, "password cannot be blank");
  } else {
    setSuccessFor(pwd);
  }
  if (pwdConfirmationValue === "") {
    setErrorFor(pwdConfirmation, "password confirmation cannot be blank");
  } else {
    setSuccessFor(pwdConfirmation);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("#error");
  formControl.className = "input-control error";
  error.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "input-control success";
}

function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
