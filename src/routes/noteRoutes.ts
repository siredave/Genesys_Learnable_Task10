import express from "express";
import { getNotes, getNote, createNote, deleteNote } from "../controllers/noteControllers";

const router = express.Router();

router.get("/", getNotes);
// router.get("/:id", getNote);
router.post("/", createNote);
// router.delete("/:id", deleteNote);

export default router;
