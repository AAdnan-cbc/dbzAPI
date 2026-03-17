const { characters } = require("../chars");
const { defaultFilePath } = require("../constants/constants");
const {
  addNewCharacterService,
} = require("../service/addNewCharacter.service");
const { writeJSON } = require("../utilities/json.util");

const addNewCharacterCtrl = (req, res) => {
  const charactersRes = addNewCharacterService();

  const payload = req.body;

  charactersRes.items.push(payload);

  writeJSON(defaultFilePath, charactersRes);

  // get the req body
  // and add the new character to the characters OBJ/Arr
  res.status(200).json(characters);
};

module.exports = {
  addNewCharacterCtrl,
};

// 1. validation -> validate the incoming request
// 2. controller -> Is to modify the req and response data.
// 3. service -> is to fetch/get/return the required data.
