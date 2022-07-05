// http://numbersapi.com/random/year?json

import fetch from "node-fetch";

// JAK USTALIĆ CO WPISALIŚMY

// ZAD 1

const year = process.argv[2] || Math.floor(Math.random() * 2022);
// console.log(year);

// // fetch("http://numbersapi.com/2011/year?json")
// //   .then((response) => response.json())
// //   .then(data=>console.log(data.text))
// //   .catch((err) => console.log(err));

// const getData = async () => {
//   const response = await fetch(`http://numbersapi.com/${year}/year?json`);
//   if (!response.ok) {
//     throw new Error("something went wrong");
//   }
//   const data = await response.json();
//   console.log(data.text);
// };
// try {
//   getData();
// } catch (error) {
//   console.log(error);
// }

// ZAD 2

// `http://numbersapi.com/${number}/${type}?json`

console.log(process.argv);
const arg = process.argv[2];
let type;

if (arg.indexOf("--year") === 0) {
  console.log("szukamy roku");
  type = "year";
} else if (arg.indexOf("--math") === 0) {
  console.log("szukamy liczby");
  type = "math";
} else if (arg.indexOf("--trivia") === 0) {
  console.log("szukamy liczby-ciekawostki");
  type = "trivia";
}

const equalSign = arg.search("=");
if (equalSign === -1) console.log("nie wpisałes liczby");

const number = arg.slice(equalSign + 1) || 1;

if (number === "" || isNaN(Number(number))) console.log("nie wpisano liczby");

const fetchData = async () => {
  const response = await fetch(`http://numbersapi.com/${number}/${type}?json`);

  if (!response.ok) {
    throw new Error("something went wrong" + response.status);
  }

  const data = await response.json();
  console.log(data.text);
};

try {
  fetchData();
} catch (err) {
  console.log(err);
}
