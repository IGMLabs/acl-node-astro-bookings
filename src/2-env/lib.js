global.user = "Alejandro"; // Con global no habría que exportar, se veria desde toda la aplicacion, no es recomendable porque cualquier archivo podria sobreescribir esta variable

process.env.USER = process.env.USER || "PETE";

// PAra transmitir info dentre clases, esta seria la recomendable, exportando directamente las variables/constantes
export const empresa = "IGM";