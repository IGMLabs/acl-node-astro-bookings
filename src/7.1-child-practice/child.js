console.log("child started working");
process.on("message", (message) => {
  const startTime = process.hrtime();
  try {
    const secuencia = generarSecuencia(message.seed);
    sendResponse(startTime, secuencia, null);
  } catch (error) {
    console.log("Child error! ", error);
    sendResponse(startTime, "", error);
  }
});

function sendResponse(startTime, secuencia, error) {
  const endTime = process.hrtime();
  const firma = firmarSecuencia(startTime, endTime);
  const secuenciaFirmada = secuencia + " " + firma;
  if (error) {
    const errorMessage = buildErrorMessage(error, firma);
    process.send(errorMessage);
    process.exit(1);
  } else {
    const okMessage = buildOkMessage(secuenciaFirmada);
    process.send(okMessage);
    process.exit(0);
  }
}

function generarSecuencia(seed) {
  if (!parseInt(seed)) {
    throw new Error(`No es un número válido ${seed}`);
  }
  if (seed <= 0) {
    return "";
  }
  if (seed === 1) {
    return "1";
  }
  let secuencia = "" + seed;
  let valorActual = seed;

  while (valorActual > 1) {
    valorActual = generateNewValue(valorActual);
    secuencia += " " + valorActual;
  }
  return secuencia;
}

function generateNewValue(valorActual) {
  let newValue = 0;
  if (isEven(valorActual)) {
    newValue = valorActual / 2;
  } else {
    newValue = valorActual * 3 + 1;
  }
  return newValue;
}

function firmarSecuencia(startTime, endTime) {
  let firma = "";
  const tiempoEjecucion = endTime[1] - startTime[1];
  firma += " , Nanosecond Start: " + startTime[1];
  firma += " , Nanoseconds End: " + endTime[1];
  firma += " , Total Nanoseconds : " + tiempoEjecucion;
  return firma;
}

function buildErrorMessage(err, secuencia) {
  return { err: err.message, secuencia: secuencia };
}

function buildOkMessage(secuencia) {
  return { secuencia: secuencia };
}

function isEven(seed) {
  return seed % 2 == 0;
}
