import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import { getSong } from './api';


function App() {
  const [userId, setuserId] = useState(JSON.parse(localStorage.getItem('musicPlayerUser'))?.data?.result?._id);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('musicPlayerUser')));
  const [songs, setsongs] = useState([
    {
      id: "1",
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      id: "2",
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      id: "3",
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      id: "4",
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  // const fetchSongs = async () => {
  //   const { data } = await getSong()
  //   setsongs(data.song)
  // }
  // useEffect(() => {
  //   fetchSongs()
  // }, [])

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Upload />
      <Switch>
        <Route path="/" exact>
          <Home
            user={user}
            userId={userId}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </Route>
        <Route path="/login" exact>
          <Login setuserId={setuserId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
