console.log("Child started working");

// envia mensaje a cualquiera que lo escuche(mejor enviar un objeto)
process.send({ msg: "I am a child working" });

// Con .on se queda escuchando...
process.on("message", (arg) => {
  if (arg.msg) {
    console.log(`Received from parent ${arg.msg}`);
  }
  if (arg.close) {
    console.log("parent make me close");
    // codigo de error: 0 fue todo bien, 1 fue algo mal
    process.exit(1);
  }
});
