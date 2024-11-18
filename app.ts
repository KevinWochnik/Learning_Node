import { IncomingMessage, ServerResponse } from "http";
const fs = require("fs");

const http = require("http");

const rqListener = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req;
  if (url === "/message" && method === "GET") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    fs.writeHeader("Location", "/");
  }
  const body: Buffer[] = [];
  req.on("data", (chunk: Buffer) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsed = Buffer.concat(body).toString();
  });
};

const server = http.createServer(rqListener);

server.listen(3000);
