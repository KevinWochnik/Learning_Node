const colors = require("colors");
const fs = require("fs");

const DATABASE_PATH = "datadb.json";

const types = {
    add: "ADD",
    remove: "REMOVE",
    list: "LIST",
  };

const handleData = (type, title) => {
  const data = fs.readFileSync(DATABASE_PATH, "utf-8");
  let exists;
  let existingItemIndex;

  let tasks = JSON.parse(data);

  if (type === types.add || type === types.remove) {
    exists = tasks.findIndex((task) => task.title === title);
    existingItemIndex = exists;
    if (exists === -1) {
      exists = false;
    } else if (exists !== -1) {
      exists = true;
    }

    if (type === types.add && exists) {
      return console.log("takie zadanie już istnieje".red);
    } else if (type === types.remove && !exists) {
      return console.log("nie istnieje takie zadanie".red);
    }
  }
  let dataJSON;
  switch (type) {
    case types.add:
      tasks = tasks.map((task, index) => ({ id: index, title: task.title }));
      console.log("dodaje zadanie".white.bgGreen);
      const id = tasks.length + 1;
      tasks.push({ id, title });
      dataJSON = JSON.stringify(tasks);
      fs.writeFileSync(DATABASE_PATH, dataJSON);
      break;

    case types.remove:
      tasks = tasks.map((task, index) => ({ id: index, title: task.title }));
      tasks.splice(existingItemIndex, 1);
      dataJSON = JSON.stringify(tasks);
      fs.writeFile(DATABASE_PATH, dataJSON, "utf-8", (err) => {
        if (err) throw new Error("something went wrong");
      });
      console.log("usuwam zadanie".white.bgGreen);
      break;

    case types.list:
      if (tasks.length) {
        console.log(`do zrobienia pozostało:`.white.bgGreen);
        tasks.forEach((task) => console.log(`- ${task.title}`));
      }
      console.log(`Lista zadań do zrobienia obejmuje`);

      break;
  }
};

module.exports = handleData;
