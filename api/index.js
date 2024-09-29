import express from "express";
import cookieParser from "cookie-parser";
import connection from "./config/connection.config.js";
import cors from "cors";
import { config } from "./utils/config.utils.js";

import authRouter from "./routes/auth.route.js";

const app = express();
const PORT = config.PORT;
connection();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  res.status(statusCode).send({
    success: false,
    statusCode,
    message,
  });
});
