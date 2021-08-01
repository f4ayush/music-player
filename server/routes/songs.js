import express from "express";
const router = express.Router();

import { addSong } from "../controllers/songs.js";

router.post("/", addSong);

export default router;