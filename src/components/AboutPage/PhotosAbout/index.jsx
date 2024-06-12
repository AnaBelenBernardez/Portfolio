import { useState } from "react";
import "./style.css";

function PhotosAbout() {
  const [isHoveredDrogo, setIsHoveredDrogo] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isHoveredTeam, setIsHoveredTeam] = useState(false);
  const [isHoveredAstro, setIsHoveredAstro] = useState(false);

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
          <img alt="me" loading="lazy" src="\assets\yep_thats_me.jpg" />
          <div className="caption mirror">✌😁</div>
        </div>
      </div>
      <div
        id="teamwork"
        className="item"
        onMouseEnter={() => {
          setIsHoveredTeam(true);
        }}
        onMouseLeave={() => {
          setIsHoveredTeam(false);
        }}
      >
        <div className="polaroid">
          {isHoveredTeam ? (
            <img alt="teamwork" loading="lazy" src="\assets\team.gif" />
          ) : (
            <img alt="teamwork" loading="lazy" src="\assets\team.jpeg" />
          )}
          <div className="caption">-`♡´-</div>
        </div>
      </div>
      <div id="hobbies" className="item">
        <div className="polaroid">
          <img alt="hobbies" loading="lazy" src="\assets\hobbies.jpg" />
          <div className="caption">🌱🎮🎲🍜📚</div>
        </div>
      </div>

      <div
        id="drogo"
        className="item"
        onMouseEnter={() => {
          setIsHoveredDrogo(true);
          playSniffSound();
        }}
        onMouseLeave={() => {
          setIsHoveredDrogo(false);
          stopSniffSound();
        }}
      >
        <div className="polaroid">
          {isHoveredDrogo ? (
            <img alt="drogo" loading="lazy" src="\assets\Drogo.gif" />
          ) : (
            <img alt="drogo" loading="lazy" src="\assets\Drogo.png" />
          )}
          <div className="caption">Drogo 🖤</div>
        </div>
      </div>
      <div id="capi" className="item">
        <div className="polaroid">
          <img alt="capi" loading="lazy" src="\assets\Capi.jpg" />
          <img
            alt="capi"
            className="hover-img"
            loading="lazy"
            src="\assets\capi.gif"
          />
          <div className="caption">Capi 🧡</div>
        </div>
      </div>
      <div
        id="astro"
        className="item"
        onMouseEnter={() => {
          setIsHoveredAstro(true);
        }}
        onMouseLeave={() => {
          setIsHoveredAstro(false);
        }}
      >
        <div className="polaroid">
          {isHoveredAstro ? (
            <img alt="astro" loading="lazy" src="\assets\Astronauta.png" />
          ) : (
            <img alt="astro" loading="lazy" src="\assets\Astro.jpg" />
          )}
          <div className="caption">Astro 🪐</div>
        </div>
      </div>
    </div>
  );
}

export default PhotosAbout;
