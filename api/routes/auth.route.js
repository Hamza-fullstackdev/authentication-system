import express from "express";
import {
  facebookAuth,
  githubAuth,
  googleAuth,
  login,
  microsoftAuth,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/google-auth", googleAuth);
router.post("/github-auth", githubAuth);
router.post("/microsoft-auth", microsoftAuth);
router.post("/facebook-auth", facebookAuth);
router.post("/login", login);

export default router;
