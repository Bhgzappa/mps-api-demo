const User = require("../models/userSchema");
const { validateAddUser } = require("../validations/userValidations");
const jwt = require("jsonwebtoken");
const addUser = async (req, res) => {
  const { error } = validateAddUser.validate(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const salt = await bcrypt.genSalt(5);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const emailFound = await User.findOne({ email: req.body.email });
  if (emailFound) return res.status(403).json("email already exist");

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  await newUser.save();
  res.status(201).json(newUser);
};

const userLogin = async (req, res) => {
  //user email authentication
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("user not found");

  //password authentication
  const vPassword = await bcrypt.compare(req.body.password, user.password);
  if (!vPassword) return res.send(404).send("invalid email or password");
  //assign a token
  const token_id = jwt.sign({ _id: user._id }, process.env.SECRET_CODE, {
    expiresIn: "2m",
  });
  res.headers("authorization", token_id).send(token_id);
  

  res.json({ user });
};

module.exports = { addUser, userLogin };
