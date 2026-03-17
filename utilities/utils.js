const validateMissingFields = (requiredFields, reqBody) => {
  let missingFields = [];

  requiredFields.map((curItem) => {
    if (!reqBody[curItem]) {
      missingFields.push(curItem);
    }
  });

  if (missingFields.length > 0) {
    return missingFields;
  }
};

module.exports = {
  validateMissingFields,
};
