import * as lib from "./lib.js";

// process.env.USER = "Pete";
console.log(process.env.USER);

console.log(lib.empresa);

console.log(global.user);

console.log(`node: ${process.argv[0]}`);
const program = process.argv[1];
console.log(`program: ${program}`);

// Los valores de argv empiezan a partir de la posicion 2, la 0 y la 1 no son argumentos, serian donde estoy y quien soy
process.argv.forEach((item, index) => {
  console.log(`Pos: ${index} Value: ${item}`);
});

console.log(`Hello ${process.argv[2]}`);
console.log(`Hello ${process.argv[3]}`);
console.log(`Hello ${process.argv[2]} ${process.argv[3]}`);

// Evitamos la posicion 0 y 1 para tener solo los argumentos
const args = process.argv.slice(2);
const cliente = {
    nombre: args[0],
    saldo: args[1],
}
global.cliente = cliente;
console.log(`Hola ${args[0]}`);
console.log(`Hola ${args[1]}`);
console.log(`Hola ${JSON.stringify(global.cliente)}`);

