const http = require("node:http");
const fs = require("node:fs");

const sendPage = (res, pagePath = "/", statusCode = 200) => {
  fs.readFile(pagePath, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
      return;
    }

    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
    return;
  });
};

const server = http.createServer();

server.on("request", (req, res) => {
  switch (req.url) {
    case "/":
      sendPage(res, "./index.html", 200);
      break;

    case "/about":
      sendPage(res, "./about.html", 200);
      break;

    case "/contact-me":
      sendPage(res, "./contact-me.html", 200);
      break;

    default:
      sendPage(res, "./404.html", 404);
      break;
  }
});

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
