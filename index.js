const http = require("node:http");
const fs = require("node:fs");

const sendPage = (res, pagePath = "/") => {
  fs.readFile(pagePath, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
    return;
  });
};

const server = http.createServer();

server.on("request", (req, res) => {
  switch (req.url) {
    case "/":
      sendPage(res, "./index.html");
      break;

    case "/about":
      sendPage(res, "./about.html");
      break;

    case "/contact-me":
      sendPage(res, "./contact-me.html");
      break;

    default:
      sendPage(res, "./404.html");
      break;
  }
});

server.listen(8080, "localhost", () => {
  console.log("server is running on http://localhost:8080");
});
