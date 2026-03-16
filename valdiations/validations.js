export const registrationValidation = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      code: "9999",
      message: "Username and password is required",
    });
    return;
  }

  next();
};
