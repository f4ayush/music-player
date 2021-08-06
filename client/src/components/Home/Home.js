import React, { useState, useEffect } from 'react'
import { getFavorite } from '../../api'
import Player from '../Player/Player'
import Songs from '../Songs/Songs'
import "./Home.css"

export default function Home({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs, user, userId }) {
    const [favorites, setFavorites] = useState([])
    const getFavorites = async () => {
        const { data } = await getFavorite(userId)
        setFavorites(data.favorites)
    }
    useEffect(() => {
        getFavorites();
    }, [])
    const [currentSongId, setcurrentSongId] = useState("")
    return (
        <div className="home">
            <Songs user={user} songs={songs} favorites={favorites} setCurrentSongIndex={setCurrentSongIndex} setcurrentSongId={setcurrentSongId} />
            <Player
                user={user}
                userId={userId}
                favorites={favorites}
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
