const express = require("express");
const { charaters } = require("./chars");
const { registrationValidation } = require("./valdiations/validations");
const {
  registrationController,
} = require("./controllers/registration.controller");

const app = express();

// {
//     "username": "Adnan",
//     "password": "noPassword"
// }

// Read the incoming JSON
// parses it JS Object
// Attach the parsed object to req.body
app.use(express.json());

const PORT = 8001;

app.get("/getCharacters", (req, res) => {
  console.log("req: ", req.body);

  //   res.status(200);
  res.status(201).json(charaters);
});

app.post("/registration", registrationValidation, registrationController);

// create an endpoint called /addNewCharacter
// expects a json object

// validate if all the details are existing in the req.body
// in controller -> take characters from our characters.
// and append this object at the end.

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
