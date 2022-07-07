const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const usersRoutes = require("./roots/users");

dotenv.config();
const port = process.env.PORT_TOKEN;

const express = require("express");

const app = express();

app.listen(port, "127.0.0.1", () => {
  console.log("server is listening at http://localhost:3000");
});

// app.use(express.static(
//   path.join(__dirname, 'static')
// ))
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  const { visitorName } = req.cookies;

  if (visitorName) {
    res.send(`witaj ${visitorName}`);
  } else {
    res.send(`czy my się znamy?`);
  }
  console.log(req.cookies);
});

usersRoutes(app);
