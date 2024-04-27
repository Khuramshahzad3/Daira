const express = require("express");
const userModel = require("./models/userModel.js");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose dbs
app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "Ahmad ALi",
    email: "ahmad@gamil.com",
    age: 22,
  });
  res.send(user);
});
app.get("/read", async (req, res) => {
  let userUp = await userModel.find();
  res.send(userUp);
});
app.get("/update", async (req, res) => {
  let userUp = await userModel.findOneAndUpdate(
    { email: "24" },
    { email: "ali@gmail.com" },
    { new: true }
  );
  res.send(userUp);
});
app.get("/delete", async (req, res) => {
  let userUp = await userModel.findOneAndDelete({
    _id: "662c6419279f5ac1c0cce869",
  });
  res.send(userUp);
});

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// server
app.listen(PORT, () => {
  console.log(`Server is Running at: ${PORT}`);
});
