const userRoutes = (app)=>{
    
// app.post("/hello", (req, res) => {
//   const { name, surname } = req.body;

//   res.send(`witaj ${name} ${surname}`);
// });

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

// app.get('/article/:id/:title?',(req)=>{
//     console.log(req.params)
// })

//  OBIEKT RES

// app.get("/", (req, res) => {
//   res.send("hello, world");
// });

// JSON
// app.get("/", (req, res) => {
//   const string = "Zażółć gęślą jaźń!";
//   const ar = string.split(" ");

//   res.send(ar);
// });

// LOCATION
// app.get("/", (req, res) => {
//   res.location("/anotherPath");
//   res.sendStatus(302);
// });

// REDIRECT
// app.get("/", (req, res) => {
//   res.send('<a href="/go-back">Cofnij</a>')
// });
// app.get("/go-back", (req, res) => {
//   res.redirect('..')
// });

// SEND DOCTYPE
// app.get('/',(req,res)=>{
//   res.send(`<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//     </head>
//     <body>
//       <h1>witaj !!!</h1>
//     </body>
//   </html>`)
// })

// SENDFILE
// app.get('/', (req,res)=>{
//   const fileName = path.join(__dirname, 'static/index2.html')
//   res.sendFile(fileName)
// })

// COOKIES
// app.get('/h1/:name', (req,res)=>{

//   const {name} = req.params

//   const dt = new Date();
//   dt.sentDate(dt.getDate()+7);

//   res.cookie('visitors_name', name, {
//     expires: dt,
//   })

// })
// app.get('/h1/:name', (req,res)=>{

//   const {name} = req.params

//   res.cookie('visitors_name', name, {
//     maxAge: 5*60*60*1000,
//   })

// })

// //
// app.get("/", (req, res) => {
//   res.send("hello, world");
// });

}

module.exports = userRoutes