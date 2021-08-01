import React, { useState } from 'react'

function Songs({ songs, favorites, setCurrentSongId, setCurrentSongIndex }) {
    const [fav, setfav] = useState(false)
    const [getIndex, setgetIndex] = useState("")
    const getTitle = (id) => {
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id == id) {
                return songs[i].title
            }
        }
    }
    const playSong = (id) => {
        // setCurrentSongId(id)
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id == id) {
                setCurrentSongIndex(i)
            }
        }
    }
    return (
        <div className="songs-column">
            <div className="song-bar">
                <button onClick={() => setfav(false)}>Songs</button>
                <button onClick={() => setfav(true)}>Favorites</button>
            </div>
            {<div className="song-list">
                {
                    fav
                        ? favorites.map((song) => {
                            return <p key={song} onClick={() => playSong(song)}>{getTitle(song)}</p>
                        })
                        : songs.map((song) => {
                            return <p key={song.id} onClick={() => playSong(song.id)}>{song.title}</p>
                        })
                }
            </div>}
        </div>
    )
}

export default Songs
