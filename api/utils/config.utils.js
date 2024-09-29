import dotenv from "dotenv";

dotenv.config();

const __config = {
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_TOKEN: process.env.JWT_TOKEN,
  AUTH_COOKIE: process.env.AUTH_COOKIE,
};

export const config = Object.freeze(__config);
