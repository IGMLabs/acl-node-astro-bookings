const fourSeconds = 4000;
const twoSeconds = 2000;

console.log("Before with inner function");
setTimeout(()=> {
    console.log("Hello after 4 seconds");
}, fourSeconds);



// Esta seria la mejor manera teniendo mas de una instruccion
console.log("Before with declared function");
function printHello() {
    console.log("Hello");
    console.log("Goodbye");
};
setTimeout(printHello, fourSeconds);



console.log("Before with declared function");
function printHello2(name) {
    console.log("Hello, se viene undefined");
    console.log(`Hello ${name}`);
    console.log("Goodbye, haverle pasado el nombre!");
};
setTimeout(printHello, fourSeconds);


// No recomendable usar esta forma
console.log("Before with arrow function expression");
const printHello3 = () => console.log("Hello2");
setTimeout(printHello3, fourSeconds);



console.log("Before with inner arrow function expression");
setTimeout(() => console.log("hello4"), fourSeconds);



console.log("Before with parameters");
setTimeout((name)=> console.log("hello " + name), fourSeconds, "IGM");



function sumar(a, b) {
 console.log(a + b);
}
setTimeout(sumar,twoSeconds, 3, 4)

// Bucle infinito, indicamos que seria cada 2 segundos
const id = setInterval(()=> console.log("Hello interval"), twoSeconds);
//Para parar el interval
//clearInterval(id);

console.log("After all the code");


