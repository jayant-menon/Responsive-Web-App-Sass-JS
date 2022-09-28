import { storeDummyCredentials } from "./dummy-users";

const form = document.querySelector("#login-form");
const usernameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");
const rememberMeElement = document.querySelector("#remember-me");
const signInButton = document.querySelector("#sign-in-button");

signInButton.addEventListener("click", logIn);
