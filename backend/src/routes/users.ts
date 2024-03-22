import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user";

const router = express.Router();

router.post("/users", async (req, res) => {
  const { email, password } = req.body;
  try {
    await User.create({ email, password });
  } catch (error) {
    if (isQueryError(error) && error.code == "ER_DUP_ENTRY") {
      return res.sendStatus(409);
    }
    throw error;
  }
  res.sendStatus(201);
});

router.post("/login", async (req, res) => {
  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "14d",
  });
  res.cookie("access-token", accessToken, {
    // NODE_ENV === “development” 인 경우:
    // sameSite: “lax”, secure: false
    // 그렇지 않은 경우:
    // sameSite: “none”, secure: true
    // maxAge: 1000 * 60 * 60 * 24 * 14
  });
  res.sendStatus(204);
});
