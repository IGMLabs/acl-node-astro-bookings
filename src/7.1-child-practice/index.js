import * as cp from "child_process";
import * as fs from "fs/promises";

const seeds = [0, 1, 2, 3, 5, 7, 11, 13, "asdasda"];
let child;
const scriptFile = process.argv[1];

seeds.forEach((seed) => {
  child = cp.fork("./src/7.1-child-practice/child.js");
  child.send({ seed });
  child.on("message", (arg) => {
    if (arg.err) {
      console.log(`Recibido error: ${arg.err} con la siguiente secuencia: ${arg.sequence} `);
    } else {
      writeFile(arg.sequence, seed);
    }
  });
});

async function writeFile(seeds, seedOriginal) {
  await fs
    .writeFile(`${scriptFile}.${seedOriginal}.txt`, seeds)
    .then(onWriteEnd)
    .catch((err) => console.log(`Esto es un error`, err))
    .finally(() => console.log("Finalizado"));
}

function onWriteEnd() {
  console.log(`Resultado OK`);
}
