const express = require("express");
const router = express.Router();
const {
  createMp,
  getAllMps,
  getSingleMp,
  updateMp,
  deleteMp,
} = require("../controllers/mpsController");
const protect = require("../authmid");

router.route("/").post(protect, createMp).get(protect, getAllMps);
router
  .route("/_id")
  .get(protect, getSingleMp)
  .put(protect, updateMp)
  .delete(protect, deleteMp);

module.exports = router;
