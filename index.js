const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Simple API v2 — CI/CD is working!");
});
app.get("/new", (req, res) => {
  res.send("This is a new feature route!");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
