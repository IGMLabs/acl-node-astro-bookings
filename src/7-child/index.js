import * as cp from 'child_process';

// ejecuta un script propio y tener una manera de comunicarse con ese script a traves de eventos
const child = cp.fork("./src/7-child/child.js");

// Primero el nombre del evento y despues el argumento(ARG seria el objeto que se envia desde el child)
child.on("message", ( arg ) => console.log(`Receibed from child ${arg.msg}`));
child.send({ msg: "I am a parent child working" });
child.on("close", (code) => console.log("child closed" + code));
child.send({ close: true });
console.log("parent started working");