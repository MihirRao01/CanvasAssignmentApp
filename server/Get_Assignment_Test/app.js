// require("dotenv").config();
console.log("starting app");

//console.log(process.env.Name);

const assignment = require("./assignment");

let Assignment = assignment.Assignment;

//let hw1 = new Assignment("hw1","DML","07/12/2015")

const Canvas = require("@kth/canvas-api").default;

async function start() {
  console.log("Making a GET request to get assignments from DSA Course");
  const canvas = new Canvas(
    process.env.Canvass_API_URL,
    process.env.Canvass_API_Token
  );

  const { body } = await canvas.get("courses/460732/assignments");
  const my_array = [];
  for (let i = 0; i < body.length; i++) {
    const obj = body[i];
    //console.log(obj.name);
    //console.log(obj.due_at);
    my_array.push(new Assignment(obj.name, "DSA", obj.due_at));
  }
  console.log("Got assignment");
  return my_array;
}
module.exports = start;
