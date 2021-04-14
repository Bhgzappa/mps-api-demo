const express = require("express");
const router = express.Router();
const {
  createMp,
  getAllMps,
  getSingleMp,
  updateMp,
  deleteMp,
} = require("../controllers/mpsController");

router.route("/").post(createMp).get(getAllMps);
router.route("/_id").get(getSingleMp).put(updateMp).delete(deleteMp);

module.exports = router;
