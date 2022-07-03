const fs = require("fs");

// fs.access("./names.txt", (err) => {
//   console.log(err ? "plik nie istnieje" : "plik istnieje");
// });

// fs.rename("names.txt", "imiona.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("nazwa zmieniona");
// });

// fs.readFile("imiona.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// const names = fs.readFileSync("imiona.txt", "utf-8");
// console.log(names);

// fs.readFile("names.txt", "utf-8", (err, data) => {
//   if (err) return;
//   fs.writeFile("users.txt", data, (err) => {
//     if (err) console.log(err);
//     else console.log("udalo sie");
//   });
// });

const names2 = "Jan, Jerzy";
fs.appendFile("users.txt", names2, (err) => {
  if (err) console.log(err);
  else console.log("udalo sie");
});
