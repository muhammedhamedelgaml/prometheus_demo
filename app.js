const express = require("express");
const app = express();
const port = 3000;
var swStats = require("swagger-stats");

// /swagger-stats/metrics    --> prometheus metrics
app.use(swStats.getMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World ");
});
app.get("/comments", (req, res) => {
  res.send("comments");
});
app.get("/threads", (req, res) => {
  res.send(" threads");
});
app.get("/replies", (req, res) => {
  res.send("replies");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
