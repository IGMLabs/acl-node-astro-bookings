// Opcion 1 importacion
import { getGreetings } from "./lib.js";

const greetings = getGreetings("IGM labs");


// Opcion2
// import * as saludos from "./lib.js";
// const greetings = saludos.getGreetings(saludos.empresa);


//Opcion 3
//import { empresa, getGreetings } from "./lib.js";
//const greetings = getGreetings(empresa);


console.log(greetings);