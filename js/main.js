const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordC = document.getElementById("passwordC");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCValue = passwordC.value.trim();

  if (usernameValue === "") {
    console.log("Username is empty");
    setErrorFor(username, "Username cannot be blank");
  } else {
    console.log("Success");
    setSuccessFor(username);
  }
  if (emailValue === "") {
    console.log("email is empty");
    setErrorFor(email, "email cannot be blank");
  } else if (!validateEmail(emailValue)) {
    console.log("Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    console.log("password is empty");
    setErrorFor(password, "password cannot be blank");
  } else {
    console.log("Success");
    setSuccessFor(password);
  }
  if (passwordCValue === "") {
    console.log("password confirmation is empty");
    setErrorFor(passwordC, "password confirmation cannot be blank");
  } else {
    console.log("Success");
    setSuccessFor(passwordC);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  formControl.className = "input-control error";
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
