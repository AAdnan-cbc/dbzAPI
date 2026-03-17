const fs = require("fs");

const readJSON = (filepath) => {
  try {
    const fileRead = fs.readFileSync(filepath);
    const parsedData = JSON.parse(fileRead);
    return parsedData;
  } catch (error) {
    console.log(`Error at File read`, error);
    return false;
  }
};

const writeJSON = (filepath, data) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.log(`Error at File write`, error);
    return false;
  }
};

module.exports = {
  readJSON,
  writeJSON,
};
