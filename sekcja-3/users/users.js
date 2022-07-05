const users = [
  { id: 1, name: "adam" },
  { id: 2, name: "gosia" },
  { id: 3, name: "pawel" },
];

module.exports = {
  showUsers() {
    const names = users.map((user) => user.name);
    console.log("nasi użytkownicy to");
    names.forEach((user) => console.log(user));
  },
  showUserObj(id) {
    const user = users.find((user) => id === user.id);
    console.log("szukamy", user);
  },
  usersListLength: users.length,
};
