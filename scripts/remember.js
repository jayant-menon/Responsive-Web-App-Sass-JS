function isToBeRemembered() {
  const rememberMeElement = document.querySelector("#remember-me");

  if (rememberMeElement.value === "true") {
    return true;
  }
  return false;
}

function rememberUser() {
  localStorage.setItem("stayLoggedIn", "true");
}

export { isToBeRemembered, rememberUser };
