const mongoose = require("mongoose");
const mpSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Number,
      required: true,
    },
    hometown: {
      type: String,
      required: true,
    },
    constituency: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Mp = mongoose.model("Mp", mpSchema);
module.exports = Mp;
