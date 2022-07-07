const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url)
  response.writeHead(200, { "Content-type": "text/html" });
  response.end("<h1>Hello node!</h1>");
});

server.listen(5500, "127.0.0.1", () => console.log("server wystartował"));
