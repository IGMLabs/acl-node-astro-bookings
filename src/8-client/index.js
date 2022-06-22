import * as https from "https";
import * as http from "http";
import * as fs from "fs";

// https.get("https://www.google.com", (res) => {
// http.get("http://localhost:3000/agencies", (res) => {
//   let body = "";
//   responseStream.on("data", (data) => {
//     // console.log(data);
//     // data = data.toString(); // al pasar data al body, lo pasamos a string y cambia los datos de buffer a string
//     // console.log(data);
//     body += data;
//   });
//   res.on("end", () => {
//     // console.log(body);
//     const agencies = JSON.parse(body);
//     console.log(agencies[1]);
//   });
// });

// // https.get("https://www.google.com", (res) => {
// function processStream(responseStream) {
//   let body = "";
//   responseStream.on("data", (data) => {
//     // console.log(data);
//     // data = data.toString(); // al pasar data al body, lo pasamos a string y cambia los datos de buffer a string
//     // console.log(data);
//     body += data;
//   });
//   responseStream.on("end", () => {
//     // console.log(body);
//     const agencies = JSON.parse(body);
//     console.log(agencies[1]);
//   });
// }

// https.get("https://www.google.com", (res) => {
//   let body = "";
//   res.on("data", (data) => {
//     body += data;
//   });
//   res.on("end", () => {
//     fs.writeFile("www.google.com.html", body);
//   });
// });

// https.get("https://www.google.com", (res) => {
//   let writeStream = fs.createWriteStream("www.google.com.html");
//   res.on("data", (data) => {
//     writeStream.write(data);
//   });
//   res.on("end", () => {
//     writeStream.close();
//   });
// });

https.get("https://www.google.com", writePipe);

function writePipe(responseStream) {
  let writeStream = fs.createWriteStream("www.google.com.html");
  responseStream.pipe(writeStream);
}
