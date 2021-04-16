const Joi = require("joi");
const validateAddUser = new Joi.object({
  name: Joi.string().min(10).required().max(50),
  email: Joi.string().min(10).max(60).email().required(),
  password: Joi.string().min(8).max(15).required(),
});
module.exports = { validateAddUser };
