import React, { useState, useEffect } from "react";
import Play from "../assets/images/assets_play.svg";
import Stop from "../assets/images/assets_stop-2.svg";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <>
      <button className="control-btn" onClick={toggle}>{playing ? <img className="img-fluid play-icon" src={Stop} alt="" /> : <img className="img-fluid stop-icon" src={Play} alt="" />}</button>
    </>
  );
};

export default Player;