const path = require("path");
const os = require("os");

// const pathToFile = __dirname + "\\"+"newIndex.js"
// const pathToFile2 = `${__dirname}\\newIndex.js`;

// console.log(pathToFile2);

// const anotherPath = path.join("/users/pl", "active", "users.json");
// console.log(anotherPath);

// const parse = path.parse(__filename)
// console.log(parse)

// const parse2 = path.parse(path.join(__dirname, 'newIndex.js'))
// console.log(parse2)

// console.log(path.extname('da.js'))

const uptime = os.uptime();
console.log(uptime);
console.log(os.homedir())
