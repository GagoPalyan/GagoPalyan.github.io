export function login(data) {
  let userList = JSON.parse(localStorage.getItem("usersList"));
  if (userList == null) {
    return false;
  } else {
    const user = userList.find(
      (obj) => obj.email == data.email && obj.password == data.password
    );
    user && localStorage.setItem("user", JSON.stringify(user));
    return user ? user : false;
  }
}

export function createUser(user) {
  let usersList = new Array();
  if (localStorage.getItem("usersList") == null) {
    user = { ...user, id: 1, balance: 100 };
    localStorage.setItem("usersList", JSON.stringify([user]));
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    usersList = JSON.parse(localStorage.getItem("usersList"));
    user = { ...user, id: usersList.length + 1, balance: 100 };
    usersList.push(user);
    localStorage.setItem("usersList", JSON.stringify(usersList));
    localStorage.setItem("user", JSON.stringify(user));
  }
}

export function logOut() {
  localStorage.removeItem("user");
}
