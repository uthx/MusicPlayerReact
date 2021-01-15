export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    //console.log("print from promise thing " + playPromise);
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};

//create repo
//git init in local codebase
//linking this with online repo git remote add origin https://github.com/uthx/MusicPlayerReact.git
