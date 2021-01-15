import React from "react";
import { playAudio } from "../utils";

//Display Song Details
const LibrarySongs = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //changing color of the songs when clicked
  const songSelectHandler = () => {
    setCurrentSong(song);
    //change active state
    const newSongsObj = songs.map((el) => {
      if (el.id === song.id) {
        return {
          ...el,
          active: true,
        };
      } else {
        return {
          ...el,
          active: false,
        };
      }
    });
    setSongs(newSongsObj);
    //check if the song is playing
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      className={`library-songs ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
