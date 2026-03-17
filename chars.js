const { defaultFilePath } = require("./constants/constants");
const { readJSON } = require("./utilities/json.util");

const characters = readJSON(defaultFilePath);

module.exports = {
  characters,
};
