const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8'})
    res.write('<h1>siema</h1>');
    res.end(`
    <h1>dzień dobry</h1>
    <script src="code.js"></script>
    `);
  })
  .listen(3000, "127.0.0.1");
