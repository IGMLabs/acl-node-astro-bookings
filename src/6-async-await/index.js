import * as fs from "fs/promises";

readFile();

async function readFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContent = await fs.readFile(scriptFile);
    console.log(fileContent.toString());
    await copyFile(fileContent.toString(), scriptFile);
  } catch (err) {
    console.log(`💣: ${err}`);
  }
}

async function copyFile(fileContent, scriptFile) {
  try {
    await fs.writeFile(`${scriptFile}.copy.txt`, fileContent);
  } catch (err) {
    console.log(`💣: ${err}`);
  }
}

// Una funcion pura no necesita nada de su entorno
