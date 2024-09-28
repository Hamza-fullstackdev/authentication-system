import mongoose from "mongoose";

const connection = async() => {
  try {
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });
  } catch (error) {
    console.log("An Unexpected Error occured while connecting to MongoDB",error);
  }
};
export default connection;
