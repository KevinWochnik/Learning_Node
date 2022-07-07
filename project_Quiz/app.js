const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const gameRoute = require("./routes/game");

dotenv.config();
const port = process.env.PORT_TOKEN;

const app = express();

app.listen(port, () => {
  console.log("server is listening at localhost:3000");
  console.log("lets play a game");
});

app.use(express.static(path.join(__dirname, "public")));

gameRoute(app)
