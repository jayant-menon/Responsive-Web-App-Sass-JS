// perform a check on dashboard to see if user is logged in
// check on login page if user is logged in and redirect automatically

function logIn() {
  const username = usernameElement.value;
  const password = passwordElement.value;

  if (!isValidLogin(username, password)) {
    alert("invalid username or password");
    return;
  }

  if (isToBeRemembered(rememberMeElement)) {
    localStorage.setItem("stayLoggedIn", "true");
  }

  localStorage.setItem("isLoggedIn", "true");

  // redirect user to dashboard
  alert("logged in");
}

function logOut() {
  if (localStorage.stayLoggedIn) {
    localStorage.removeItem("stayLoggedIn");
  }

  localStorage.removeItem("isLoggedIn");
}

// split into 2 functions
function isValidLogin(username, password) {
  const credentials = localStorage.getItem("credentials");

  if (credentials === undefined) {
    alert("No registered users");
    return false;
  }

  const credentialsObj = JSON.parse(credentials);

  credentialsObj.forEach((userObj) => {
    const isValidUsername = userObj.username === username;
    const isValidPassword = userObj.password === password;

    if (isValidUsername && isValidPassword) {
      return true;
    }
  });

  alert("Invalid username or password");
  return false;
}
