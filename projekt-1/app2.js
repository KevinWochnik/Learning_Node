// https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json
// `http://api.nbp.pl/api/exchangerates/rates/${table}/${code}/`   - pojedynczy wynik

// ZAD 3

import fetch from "node-fetch";
import fs from "fs";

const validCodes = ["usd", "gbp", "eur", "chf"];
const table = "a";

const code = process.argv[2];
const isValid = validCodes.find((currenct) => currenct === code) ? true : false;

if (!isValid) {
  throw new Error("something went wrong with validating the currency");
}

const API_URL = `http://api.nbp.pl/api/exchangerates/rates/${table}/${code}?format=json`;

const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const date = data.rates[0].effectiveDate;

  const message = `Średnia cena ${
    data.currency
  } w dniu ${date} wynosi ${data.rates[0].mid.toFixed(2)} zł`;


  fs.appendFile(`./currencies/currencies_${date}.txt`, `${message}\n`, (err) => {
    console.log("dane do pliku");
  });

  console.log(response.status);
  console.log(message);
};
try {
  fetchData();
} catch (err) {
  console.log(err);
}
