const {
  addNewCharacterService,
} = require("../service/addNewCharacter.service");

const addNewCharacterCtrl = (req, res) => {
  const charactersRes = addNewCharacterService();

  charactersRes.items.push(req.body);

  // get the req body
  // and add the new character to the characters OBJ/Arr
  res.status(200).json(charactersRes);
};

module.exports = {
  addNewCharacterCtrl,
};

// 1. validation -> validate the incoming request
// 2. controller -> Is to modify the req and response data.
// 3. service -> is to fetch/get/return the required data.
