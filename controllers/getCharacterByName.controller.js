const { charaters } = require("../chars");

const getCharacterByNameCtrl = (req, res) => {
  const { username } = req.body;

  const charItems = charaters.items;

  const userObj = charItems.find((curItem) => curItem.name === username);

  console.log(userObj);

  res.status(200).json({
    code: "0000",
    message: "Username search successful",
    details: {
      character: userObj,
    },
  });
};

module.exports = {
  getCharacterByNameCtrl,
};
