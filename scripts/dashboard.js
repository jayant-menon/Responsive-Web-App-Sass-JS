window.onload = () => {
  (function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      window.location.href = "/index.html";
    }
  })();
};
