const express = require("express");
const fs = require("node:fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
