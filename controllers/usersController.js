const User = require("../models/userSchema");

const addUser = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await newUser.save();
  res.status(201).json(newUser);
};

module.exports = { addUser };
