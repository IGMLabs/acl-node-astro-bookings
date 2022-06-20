const twoSeconds = 2000;

console.log("Before with async iterator");
let counter = 0;
const maxCounter = 4;

// function printCounter() {
//   console.log(`Hello ${counter}`);
//   counter++;
//   if (counter === maxCounter) {
//     clearInterval(intervalId);
//   }
// }
// const intervalId = setInterval(printCounter, twoSeconds);

function printCounter2() {
  console.log(`Hello ${counter}`);
  counter = counter +1;
  if (counter >=4) {
    clearInterval(intervalId2);
  }
}
const intervalId2 = setInterval(printCounter2, twoSeconds);

console.log("After all the code");