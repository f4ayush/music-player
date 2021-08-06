import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import SongModal from "../models/songs.js";

export const addSong = async (req, res) => {
    const { title, artist, image, song } = req.body;

    try {
        console.log(title, artist, image, song)
        const result = await SongModal.create({ title, artist, image, song });

        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};

export const getSong = async (req, res) => {

    try {
        const song = await SongModal.find()
        res.status(201).json({ song });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};

export const getSongDetails = async (req, res) => {

    try {
        const song = await SongModal.find()
        res.status(201).json({ song });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};