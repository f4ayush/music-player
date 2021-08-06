import express from "express";
const router = express.Router();

import { signin, signup, addFavorite, deleteFavorite, getFavorite } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/addFavorite", addFavorite);
router.post("/getFavorite", getFavorite);
router.post("/deleteFavorite", deleteFavorite);

export default router;