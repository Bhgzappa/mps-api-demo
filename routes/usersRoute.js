const express = require("express");
const { addUser } = require("../controllers/usersController");
const router = express.Router();
router.route("/register").post(addUser);

module.exports = router;
