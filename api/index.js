import express from "express";
import cookieParser from "cookie-parser";
import connection from "./config/connection.config.js";
import { config } from "./utils/config.utils.js";

const app = express();
const PORT = config.PORT;
connection();

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
