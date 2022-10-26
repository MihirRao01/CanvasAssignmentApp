const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const start = require("./Get_Assignment_Test/app");
// start().then((data) => {
//   console.log(data[0].name);
// });

app.use(cors());

console.log(start);

app.get("/api/assignments", async (req, res) => {
  const data = await start();
  return res.json(data);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
