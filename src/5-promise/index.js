import * as fs from "fs/promises";

const scriptFile = process.argv[1];
// Leer Fichero
fs.readFile(scriptFile)
  //   .then((fileContent) => copyFile(fileContent))
  .then(copyFile)
  .catch((err) => {
    console.log(`💣: ${err}`);
  })
  .finally(() => {
    console.log("Terminado");
  });

function onWriteEnd() {
  console.log("Archivo copiado");
}

// Copiar Fichero
function copyFile(fileContent) {
  fs.writeFile(`${scriptFile}.copy.txt`, fileContent)
    .then(onWriteEnd)
    .catch((err) => console.log(`Error ${err}`))
    .finally(() => console.log("Finalizado"));
}
