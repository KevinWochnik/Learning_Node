// const add = (x, y) => x + y;
// const division = (number1, number2) => number1 / number2;

// const math = (a,b,callback)=>{
//     console.log(callback(a,b))
// };

// math(2,3,add)
// math(2,3,division)

// setTimeout(()=>{
//    console.log(add(2,3))
// }, 3000)

const fs = require("fs");
fs.readFile("./text.txt", "utf8", (err, file) => console.log(err, file));
console.log("po odczytaniu ?");

