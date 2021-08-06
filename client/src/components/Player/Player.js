import React, { useState, useRef, useEffect } from 'react'
import { addFavorite, deleteFavorite } from '../../api';
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    const addToFav = async () => {
        try {
            await addFavorite({ userId: props.userId, songId: props.songs[props.currentSongIndex].id })
            props.setFavorites((fav) => {

                return [...fav, props.songs[props.currentSongIndex].id]
            })
        } catch (error) {
            console.log(error)
        }
    }
    const deleteFav = async () => {
        try {
            await deleteFavorite({ userId: props.userId, songId: props.songs[props.currentSongIndex].id })
            const fav = props.favorites.filter(fav => fav !== props.songs[props.currentSongIndex].id)
            props.setFavorites(fav)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="c-player">
            {props.user &&
                <div>
                    <p onClick={deleteFav}>Dislike</p>
                    <p onClick={addToFav}>Like</p>
                </div>
            }

            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
