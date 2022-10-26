//test file to test the start funciton
require("dotenv").config();
const start = require("./Get_Assignment_Test/app");
start().then((data) => {
  //console.log(process.env.Canvass_API_URL);
  console.log(data[0].name);
});
