import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../utils";
//display music player basic controls
const Player = ({
  currentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //useEffect this function will run every time currentSong state is updated
  useEffect(() => {
    const newSongsObj = songs.map((el) => {
      if (el.id === currentSong.id) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);
  //methods
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  //timeUpdateHandler is gonna handle the timer value which is showing on the range
  //it uses onTimeUpdate Event which fires auto when the song plays

  //getTime will format the time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //it will handle the drag of the input slider
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    //trying to find the index of the current song
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    //finding the new index as per the button pressed forward or backward
    const newIndex = indexHandler(currentIndex, direction, songs.length);
    setCurrentSong(songs[newIndex]);
    playAudio(isPlaying, audioRef);
  };
  //this function will return the index of the song according to the direction instruction
  const indexHandler = (currentIndex, direction, totalLength) => {
    if (direction === "skipBack") {
      return currentIndex - 1 < 0 ? totalLength - 1 : currentIndex - 1;
    } else {
      return (currentIndex + 1) % totalLength;
    }
  };

  //adding styles
  //adding animation percentage as inline style to input
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  //contains the color style for input
  const trackColor = {
    background: `linear-gradient(to right, ${currentSong.color[0]} , ${currentSong.color[1]})`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track" style={trackColor}>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0.00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipTrackHandler("skipBack")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          className="play"
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipTrackHandler("skipForward")}
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
