const express = require("express");
const fs = require("fs/promises");

const app = express();

const port = 8080;

app.get("/", async (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(await fs.readFile("./index.html"));
});

app.get("/about", async (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(await fs.readFile("./about.html"));
});

app.get("/contact-me", async (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(await fs.readFile("./contact-me.html"));
});

app.get("*", async (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(await fs.readFile("./404.html"));
})

app.listen(port, () => {
  console.log(`Example Express App running on port ${port}`);
});