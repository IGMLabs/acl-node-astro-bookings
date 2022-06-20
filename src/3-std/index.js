process.stdout.write("Hola mundo\n");

// Dentro del on iria el nombre del evento que capturamos, y dentro de la funcion estaria su callback del evento capturado(le podemos pasar argumentos)
process.stdin.on('readable', ()=> {
    const escrito = process.stdin.read();
    process.stdout.write(`Hola ${escrito}`);

});
