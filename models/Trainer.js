const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    expertise: String,
    experienceYears: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trainer", trainerSchema);
