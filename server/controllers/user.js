import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/users.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};


export const addFavorite = async (req, res) => {
  const { userId, songId } = req.body

  try {
    const user = await UserModal.findById(userId)
    user.songs.push(songId)
    await UserModal.findByIdAndUpdate(userId, user, { new: true })
    res.status(200).json(songId)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}

export const deleteFavorite = async (req, res) => {
  const { userId, songId } = req.body
  try {
    const user = await UserModal.findById(userId)
    user.songs = user.songs.filter(song => song != songId)
    await UserModal.findByIdAndUpdate(userId, user, { new: true })
    res.status(200).json(songId)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}

export const getFavorite = async (req, res) => {
  const { userId } = req.body

  try {
    const user = await UserModal.findById(userId)
    res.status(200).json({ favorites: user.songs })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}