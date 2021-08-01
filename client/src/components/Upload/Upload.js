import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import * as api from "../../api"
export default function Upload() {
    const [songDetails, setsongDetails] = useState({ title: "", artist: "", image: "", song: "" })
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await api.addSong(songDetails)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Song Title" value={songDetails.title} onChange={(e) => setsongDetails({ ...songDetails, title: e.target.value })} />
                <input type="text" placeholder="Artist" value={songDetails.artist} onChange={(e) => setsongDetails({ ...songDetails, artist: e.target.value })} />
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setsongDetails({ ...songDetails, image: base64 })} />
                <FileBase type="file" multiple={false} onDone={({ base64 }) => console.log(base64)} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
