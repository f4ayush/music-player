import express from "express";
const router = express.Router();

import { addSong, getSong, getSongSrc } from "../controllers/songs.js";

router.post("/addSong", addSong);
router.get("/getSongs", getSong);
router.post("/getSongSrc", getSongSrc);

export default router;