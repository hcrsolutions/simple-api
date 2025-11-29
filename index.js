const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Simple API v1 — CI/CD working!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
// test deploy
