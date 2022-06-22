import * as http from "http";
import * as fs from "fs";

const PORT = 8000;
const BASE_URL =
  "C:/Users/IGM000102/Desktop/Angular/Curso-Angular-Alberto-Basalo/angular/igmlabs/acl-node-astro-bookings/src";
const OK = 200;
const NOT_FOUND = 404;
const server = http.createServer();

server.on("request", async (requestStream, responseStream) => {
  let url = BASE_URL + requestStream.url;
  console.log(requestStream.url);
  await fs.readFile(url, (err, fileContent) => {
    //
    const argumentObject = {
      requestStream: requestStream,
      responseStream: responseStream,
      url: url,
      err: err,
      fileContent: fileContent,
    };

    processRequest(argumentObject);
    if (!err) {
      writePipe(argumentObject);
    }
  });
});

server.listen(PORT, () => {
  console.log("server listening");
});

function processRequest(argumentObject) {
  if (argumentObject.err) {
    processErrorRequest(argumentObject);
  } else {
    processOkRequest(argumentObject);
  }
}

function processErrorRequest(argumentObject) {
  argumentObject.responseStream.writeHead(NOT_FOUND, { "Content-type": "text/plain" });
  argumentObject.responseStream.write(buildMessageError(argumentObject));
  argumentObject.responseStream.end();
}
function processOkRequest(argumentObject) {
  argumentObject.responseStream.writeHead(OK, { "Content-type": "text/plain" });
  argumentObject.responseStream.write(buildMessageOk(argumentObject));
  argumentObject.responseStream.end();
}

function buildMessageOk(argumentObject) {
  let message = "";
  message += "Hola mundo \n";
  message += argumentObject.requestStream.url;
  message += "\n";
  message += argumentObject.fileContent;
  return message;
}

function buildMessageError(argumentObject) {
  let message = "";
  message += "Arquive not found \n";
  message += argumentObject.requestStream.url;
  message += "\n";
  message += JSON.stringify(argumentObject.err);
  return message;
}

function writePipe(argumentObject) {
  let archiveName = argumentObject.requestStream.url.split("/");
  let finalArchiveName = archiveName.join(".");
  let writeStream = fs.createWriteStream("./src/9-server/" + finalArchiveName);
  writeStream.write(argumentObject.fileContent);
  writeStream.close();
}
