global.user = "Alejandro"; // Con global no habría que exportar, se veria desde toda la aplicacion, no es recomendable porque cualquier archivo podria sobreescribir esta variable

process.env.USER = process.env.USER || "PETE";

export const empresa = "IGM";