import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connection from "./config/connection.config.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connection();

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
