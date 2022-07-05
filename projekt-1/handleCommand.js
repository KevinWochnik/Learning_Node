const colors = require("colors");
const handleData = require("./handleData");

const types = {
    add: "ADD",
    remove: "REMOVE",
    list: "LIST",
  };

const handleCommand = ({ add, remove, list }) => {
  if (add) {
    if (typeof add !== "string") {
      return console.log("wpisz nazwe dodawanego zadania (tekst)");
    } else if (add.length < 7) {
      return console.log("wpisz nazwie wiekszą od 7");
    }
    handleData(types.add, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      console.log("wpisz nazwew usuwanego zadania");
    }
    handleData(types.remove, remove);
  } else if (list || list === "") {
    handleData(types.list, null);
  } else {
    console.log("nie rozumiem polecenia");
  }
};

module.exports = handleCommand;
