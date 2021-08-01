import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    image: { type: String, required: true },
    id: { type: String },
    song: { type: String, required: true }
});

export default mongoose.model("Songs", songsSchema);