import express from "express";
import { authenticateUser } from "../middlewares/authentication";
import { authorizeNote } from "../middlewares/authorization";

const router = express.Router();

router.get(
  "/notes/:id",
  authenticateUser,
  authorizeNote,
  async (req: Request, res) => {
    const note = req.note!;
    res.json(note);
  }
);
