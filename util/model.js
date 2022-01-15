import mongoose from "mongoose";

const modelData = new mongoose.Schema(
  {
    name: String,
    game: String,
    pix: String,
  },
  { timestamps: true }
);

module.exports = mongoose.models.myData || mongoose.model("myData", modelData);
