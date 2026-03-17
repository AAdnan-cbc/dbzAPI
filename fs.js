// File System
const fs = require("fs");

const fileRead = fs.readFileSync("./characters.json"); // JSON OBJ
const jsonObj = JSON.parse(fileRead); // JS OBJ
console.log(jsonObj);
