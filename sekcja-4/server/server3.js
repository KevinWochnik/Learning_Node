const http = require("http");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();
const port = process.env.PORT_TOKEN;

const users = [
  { name: "Adam", id: 1 },
  { name: "Ewa", id: 2 },
];

const pages = {
  main: "/",
  users: "/users",
  api: "/api/users",
};

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    switch (req.url) {
      case pages.main:
        fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
          if (err) {
            res.end("<h1>Nie udało się pobrać pliku</h1>");
          } else {
            res.end(page);
          }
        });
        break;
      case pages.users:
        fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
          if (err) {
            res.end("<h1>nie udało się pobrać strony</h1>");
          } else res.end(page);
        });
        break;
      case pages.api:
        res.writeHead(200, {
          "Content-Type": "application/json;charset=utf-8",
        });
        const usersJSON = JSON.stringify(users);
        res.end(usersJSON);
        break;
      default:
        res.end("strona nie istnieje");
    }
  })
  .listen(port, "127.0.0.1", () => {
    console.log("nasz server nasłuchuje na port 3000");
  });
