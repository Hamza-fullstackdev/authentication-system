import express from "express";
import { githubAuth, googleAuth, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register",register);
router.post("/google-auth",googleAuth);
router.post("/github-auth",githubAuth);

export default router;
