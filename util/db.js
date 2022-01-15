import mongoose from "mongoose";

const url = "mongodb://localhost/testBuildDB";
const dbConnect = async () => {
  await mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("local DB nw connecetd");
    });
};

export default dbConnect;
