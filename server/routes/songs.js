import express from "express";
const router = express.Router();

import { addSong, getSong } from "../controllers/songs.js";

router.post("/addSong", addSong);
router.get("/getSongs", getSong);

export default router;