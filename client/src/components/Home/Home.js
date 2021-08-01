import React, { useState } from 'react'
import Player from '../Player/Player'
import Songs from '../Songs/Songs'
import "./Home.css"

export default function Home({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) {
    const [favorites, setFavorites] = useState([])
    const [currentSongId, setcurrentSongId] = useState("")
    return (
        <div className="home">
            <Songs songs={songs} favorites={favorites} setCurrentSongIndex={setCurrentSongIndex} setcurrentSongId={setcurrentSongId} />
            <Player
                setFavorites={setFavorites}
                currentSongId={currentSongId}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    )
}
