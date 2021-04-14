const Mp = require("../models/mpSchema");

const createMp = async (req, res) => {
  const newMp =  new Mp({
    name: req.body.name,
    dob: req.body.dob,
    hometown: req.body.hometown,
    constituency: req.body.constituency,
    party: req.body.party,
    religion: req.body.religion,
  });
  await newMp.save();
  res.status(201).json(newMp);
};

const getAllMps = async (req, res) => {
  const mps = await Mp.find();
  res.json(mps);
};

const getSingleMp = async (req, res) => {
  const mp = await Mp.findById(req.params._id);
  res.json(mp);
};

const updateMp = async (req, res) => {
  const foundMp = await Mp.findById(req.params._id);
  if (foundMp) {
    (foundMp.name = req.body.name),
      (foundMp.dob = req.body.dob),
      (foundMp.hometown = req.body.hometown),
      (foundMp.constituency = req.body.constituency),
      (foundMp.party = req.body.party),
      (foundMp.religion = req.body.religion);
    const updatedMp = await foundMp.save();
    res.json({ updatedMp });
  }
};

const deleteMp = async (req, res) => {
  const foundMp = await Mp.findById(req.params._id);
  if (foundMp) {
    foundMp.remove();
    res.json({ msg: `${foundMp.name} remove` });
  } else {
    res.status(404).json({ error: "Mp not found" });
  }
};

module.exports = { createMp, getAllMps, getSingleMp, updateMp, deleteMp };
