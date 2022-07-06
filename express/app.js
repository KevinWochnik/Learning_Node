const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT_TOKEN;

const express = require("express");

const app = express();

app.listen(port, "127.0.0.1", () => {
  console.log("server is listening at http://localhost:3000");
});

// app.all("/", (req) => {
//   const { name, surname } = req.query;
//   console.log(`req.url`, req.url);
//   console.log(`req.originalUrl`, req.originalUrl);
//   console.log(`req.path`, req.path);

//   console.log("req.protocol", req.protocol);
//   console.log("req.secure", req.secure);
//   if (req.protocol !== "https") {
//     console.log("protokół niezabezpieczony (protocol)");
//   }
//   if (!req.secure) {
//     console.log("protokół niezabezpieczony (secure)");
//   }

//   console.log(req.query);
//   console.log(`Hello ` + name);
// });

// app.get("/", (req) => {
//   console.log(req.hostname);
//   console.log(req.ip);
//   console.log(req.ips);
// });
// app.get("/hi", () => {
//   console.log("Hi, world");
// });
// app.all("/hi", (req) => {
//   console.log(req.method);
// });

// app.get("/", (req) => {
//   console.log("spis ludzi");
// });

// app.get("/:id", (req) => {
//   console.log("informacja szczegółowa na temat osoby o id 1");
// });

// app.post("/", (req) => {
//   console.log("dodawanie nowej osoby");
// });

// app.patch("/1", (req) => {
//   console.log("aktualizacje osoby o id 1");
// });

// app.delete("/1", (req) => {
//   console.log("usuwanie osoby o id 1");
// });




// app.get("/hello/new-user", (req) => {
//   console.log("dodawanie nowego użytkownika");
// });

// app.get("/hello/:name", (req) => {
//   const { name } = req.params;
//   console.log("powitanie osoby " + name);
// });


app.get('/article/:id/:title?',(req)=>{
    console.log(req.params)
})
