import dotenv from "dotenv";

dotenv.config();

const __config = {
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL,
};

export const config = Object.freeze(__config);
