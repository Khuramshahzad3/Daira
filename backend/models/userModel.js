const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/my-app");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB Connected");
});

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
