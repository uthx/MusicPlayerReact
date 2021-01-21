//import styles
import { useState, useRef } from "react";
import "./styles/app.scss";

//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import utils
import data from "./data";

function App() {
  //state
  //1-audioRef state- holds the ref to the current audio file
  const audioRef = useRef(null);
  //2-songs state : state that stores all the songs
  const [songs, setSongs] = useState(data());
  //3- currentSong state : state that hooks the currentSong
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //4- isPlaying state : state that stores info about the song playing status
  const [isPlaying, setIsPlaying] = useState(false);
  //5-songInfo state  : holds metaData about the currentSong thats playing
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  // libraryStatus is the library toggle status
  const [libraryStatus, setLibraryStatus] = useState(false);
  //methods
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculating songPercentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);

    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };
  const songEndHandler = async () => {
    //finding the index of the current Song
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    //chainging the currentSong
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    //chcecking that if we still playing then playing the next new  current song
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
