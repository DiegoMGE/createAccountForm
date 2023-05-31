const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const pwdConfirmation = document.getElementById("passwordC");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = pwd.value.trim();
  const pwdConfirmationValue = pwdConfirmation.value.trim();

  //   Validate Username
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (!validateUsername(usernameValue)) {
    setErrorFor(
      username,
      "Invalid username. Only letters and numbers are allowed. At least 4 characteres."
    );
  } else {
    setSuccessFor(username);
  }

  //   Validate Email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, "Not a valid email.");
  } else {
    setSuccessFor(email);
  }

  //   Validate Password
  if (pwdValue === "") {
    setErrorFor(pwd, "Password cannot be blank");
  } else if (!validatePassword(pwdValue)) {
    setErrorFor(
      pwd,
      "Password must be at least 8 characters, one lowercase letter, one uppercase letter and one digit."
    );
  } else {
    setSuccessFor(pwd);
  }

  //   Validate Password Confirmation
  if (pwdConfirmationValue === "") {
    setErrorFor(pwdConfirmation, "Password confirmation cannot be blank");
  } else if (!validatePassword(pwdConfirmationValue)) {
    setErrorFor(
      pwdConfirmation,
      "Password must be at least 8 characters, one lowercase letter, one uppercase letter and one digit."
    );
  } else {
    setSuccessFor(pwdConfirmation);
  }

  //   Validate if passwords match
  if (pwdValue !== pwdConfirmationValue) {
    setErrorFor(pwdConfirmation, "Passwords do not match.");
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

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("#error");
  formControl.className = "input-control success";
  error.innerText = "";
}

// VALIDATE USERNAME
// do not start with a digit
// at least one or more lowercase/uppercase letter or digits
function validateUsername(username) {
  return /^[^\d][a-zA-Z0-9]{3,}$/.test(username);
}

// FUNCTION TO VALIDATE PASSWORD
// at least one lowercase/upercase letter, digit
// at least 8 characters
function validatePassword(pwd) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(pwd);
}

function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
