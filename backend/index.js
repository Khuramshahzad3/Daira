const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded, { extented: true });

app.get("/", (req, res) => {
  res.send("Hello World");
});