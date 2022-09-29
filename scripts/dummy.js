// set up 2 users
export function storeDummyCredentials() {
  const user1 = {
    username: "Jayant",
    password: "launchven99",
  };

  const user2 = {
    username: "Suraj",
    password: "lven9",
  };

  const credentials = [user1, user2];

  // local storage accepts only JSON
  const serializedCredentials = JSON.stringify(credentials);

  localStorage.setItem("credentials", serializedCredentials);
}
