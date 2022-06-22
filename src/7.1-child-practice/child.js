console.log("child started working");
process.on("message", (message) => {
  const startTime = process.hrtime();
  try {
    const sequence = generateSequence(message.seed);
    sendResponse(startTime, sequence, null);
  } catch (error) {
    console.log("Child error! ", error);
    sendResponse(startTime, "", error);
  }
});

function sendResponse(startTime, sequence, error) {
  const endTime = process.hrtime();
  const signed = signSequence(startTime, endTime);
  const sequenceSigned = sequence + " " + signed;
  if (error) {
    const errorMessage = buildErrorMessage(error, signed);
    process.send(errorMessage);
    process.exit(1);
  } else {
    const okMessage = buildOkMessage(sequenceSigned);
    process.send(okMessage);
    process.exit(0);
  }
}

function generateSequence(seed) {
  if (!parseInt(seed)) {
    throw new Error(`Esto no es un número válido =>  ${seed}`);
  }
  if (seed <= 0) {
    return "";
  }
  if (seed === 1) {
    return "1";
  }
  let sequence = "" + seed;
  let currentValue = seed;

  while (currentValue > 1) {
    currentValue = generateNewValue(currentValue);
    sequence += " " + currentValue;
  }
  return sequence;
}

function generateNewValue(currentValue) {
  let newValue = 0;
  if (isEven(currentValue)) {
    newValue = currentValue / 2;
  } else {
    newValue = currentValue * 3 + 1;
  }
  return newValue;
}

function signSequence(startTime, endTime) {
  let signature = "";
  const executionTime = endTime[1] - startTime[1];
  signature += "Nanosecond Start: " + startTime[1];
  signature += ", Nanoseconds End: " + endTime[1];
  signature += ", Total Nanoseconds : " + executionTime;
  return signature;
}

function buildErrorMessage(err, sequence) {
  return { err: err.message, sequence: sequence };
}

function buildOkMessage(sequence) {
  return { sequence: sequence };
}

function isEven(seed) {
  return seed % 2 == 0;
}
