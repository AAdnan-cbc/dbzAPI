export const registrationController = (req, res) => {
  console.log("req bdoy", req.body);

  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      code: "9999",
      message: "Username and password is required",
    });
  }

  res.json({
    code: "0000",
    message: "Registration is successful",
    details: {
      username,
      // username: value
    },
  });
};
