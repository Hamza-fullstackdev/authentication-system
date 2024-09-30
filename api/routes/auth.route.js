import express from "express";
import {
  githubAuth,
  googleAuth,
  microsoftAuth,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/google-auth", googleAuth);
router.post("/github-auth", githubAuth);
router.post("/microsoft-auth", microsoftAuth);

export default router;
