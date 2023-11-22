const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (request, response) => {
  request.on("error", err => {
    console.error(err);
  });

  const {url} = request;

  let body;
  if (url === "/") {
    response.statusCode = 200;
    body = await fs.readFile("./index.html");
  } else if (url === "/about") {
    response.statusCode = 200;
    body = await fs.readFile("./about.html");
  } else if (url === "/contact-me") {
    response.statusCode = 200;
    body = await fs.readFile("./contact-me.html");
  } else {
    response.statusCode = 404;
    body = await fs.readFile("./404.html");
  }
  response.end(body);
});

server.listen(8080);