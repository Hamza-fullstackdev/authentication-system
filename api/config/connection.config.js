import mongoose from "mongoose";
import dotenv from "dotenv";
import { config } from "../utils/config.utils.js";
dotenv.config();

const connection = async () => {
  try {
    await mongoose
      .connect(config.MONGODB_URL)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB", err);
      });
  } catch (error) {
    console.log(
      "An Unexpected Error occured while connecting to MongoDB",
      error
    );
  }
};
export default connection;
