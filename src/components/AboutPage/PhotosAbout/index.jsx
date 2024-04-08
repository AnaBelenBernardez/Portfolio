import React, { useState } from "react";
import "./style.css";

function PhotosAbout() {
  const [isHovered, setIsHovered] = useState(false);
  const [audio, setAudio] = useState(null);

  const playSniffSound = () => {
    const audio = new Audio("./assets/sniff.mp3");
    audio.play();
    setAudio(audio);
  };

  const stopSniffSound = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
    }
  };

  return (
    <div className="photosAbout">
      <div id="thats-me" className="item">
        <div className="polaroid">
          <img loading="lazy" src="\assets\yep_thats_me.jpg" />
          <div className="caption mirror">✌😁</div>
        </div>
      </div>
      <div id="teamwork" className="item">
        <div className="polaroid">
          <img loading="lazy" src="\assets\team.jpeg" />
          <div className="caption">-`♡´-</div>
        </div>
      </div>
      <div id="hobbies" className="item">
        <div className="polaroid">
          <img loading="lazy" src="\assets\hobbies.jpg" />
          <div className="caption">🌱🎮🎲🍜📚</div>
        </div>
      </div>

      <div
        id="drogo"
        className="item"
        onMouseEnter={() => {
          setIsHovered(true);
          playSniffSound();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          stopSniffSound();
        }}
      >
        <div className="polaroid">
          {isHovered ? (
            <img loading="lazy" src="\assets\Drogo.gif" />
          ) : (
            <img loading="lazy" src="\assets\Drogo.png" />
          )}
          <div className="caption">Drogo 🖤</div>
        </div>
      </div>
      <div id="capi" className="item">
        <div className="polaroid">
          <img loading="lazy" src="\assets\Capi.jpg" />
          <img className="hover-img" loading="lazy" src="\assets\capi.gif" />
          <div className="caption">Capi 🧡</div>
        </div>
      </div>
    </div>
  );
}

export default PhotosAbout;
