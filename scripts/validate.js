// perform a check on dashboard to see if user is logged in
// check on login page if user is logged in and redirect automatically
// implement normal login on session storage - make the user be
// logged out when the tab is closed
// what is a user-session?

import { redirectToDash } from "./redirects.js";

function logIn() {
  localStorage.setItem("isLoggedIn", "true");

  redirectToDash();

  alert("logged in");
}

function logOut() {
  if (localStorage.stayLoggedIn) {
    localStorage.removeItem("stayLoggedIn");
  }

  localStorage.removeItem("isLoggedIn");
}

function isValidLogin(username, password) {
  const userDB = localStorage.getItem("credentials");

  if (!userDB) {
    // return a particular error object and match in index.js
    // alert("No registered users");
    return false;
  }

  if (!isValidCredentials(userDB, username, password)) {
    // return a particular error object and match in index.js
    // alert("Invalid username or password");
    return false;
  }

  return true;
}

function isValidCredentials(serializedDB, username, password) {
  let isValid = false;

  const users = JSON.parse(serializedDB);

  users.forEach((user) => {
    const isValidUsername = user.username == username;
    const isValidPassword = user.password == password;

    if (isValidUsername && isValidPassword) {
      isValid = true;
      return;
    }
  });

  // no match found
  return isValid;
}

export { logIn, logOut, isValidLogin };
