import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", authController.signup);

router.get("/login", (req, res) => {
  res.send("login route");
});

router.get("/logout", (req, res) => {
  res.send("logout route");
});

export default router;
