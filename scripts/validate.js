const form = document.querySelector("#login-form");
const usernameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");
const rememberMeElement = document.querySelector("#remember-me");
const signInButton = document.querySelector("#sign-in-button");

console.log(form);
console.log(usernameElement);
console.log(passwordElement);
console.log(rememberMeElement);
console.log(signInButton);

function logIn() {
  const username = usernameElement.value;
  const password = passwordElement.value;

  if (!isValidLogin(username, password)) {
    alert("invalid username or password");

    return;
  }

  localStorage.setItem("isLoggedIn", "true");
}

function logOut() {
  localStorage.removeItem("isLoggedIn");
}

function storeDummyCredentials() {
  const username = "jmenon";
  const password = "launchven99";

  const credentials = { username, password };
  const serializedCredentials = JSON.stringify(credentials);

  localStorage.setItem("credentials", serializedCredentials);
}

function isValidLogin() {}
