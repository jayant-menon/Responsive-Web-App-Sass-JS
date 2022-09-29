import { storeDummyCredentials } from "./dummy.js";
import { isValidLogin, logIn, logOut } from "./validate.js";
import { isToBeRemembered, rememberUser } from "./remember.js";

const form = document.querySelector("#login-form");
const usernameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");
const signInButton = document.querySelector("#sign-in-button");

signInButton.addEventListener("click", loginClicked);

function loginClicked(e) {
  e.preventDefault();

  const username = usernameElement.value;
  const password = passwordElement.value;

  // implement proper errors here
  if (!isValidLogin(username, password)) {
    alert("invalid username or password");
    return;
  }

  if (isToBeRemembered()) {
    rememberUser();
  }

  logIn();
}
