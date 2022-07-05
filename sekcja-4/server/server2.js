const http = require("http");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT_TOKEN;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(`<h1>Strona główna</h1>`);
    } else if (req.url === "/users") {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(`<h1>Strona użytkowników</h1>`);
    }
    else{
      res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      res.write(`<h1>Brak strony</h1>`);
    }
    res.end();
  })
  .listen(port, "127.0.0.1", () => {
    console.log("nasz server nasłuchuje na port 3000");
  });
