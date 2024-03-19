import React from "react";
import "./style.css";

function PhotosAbout() {
  return (
    <div className="photosAbout">
      <div id="thats-me" className="item">
        <div className="polaroid">
          <img src="\assets\yep_thats_me.jpg" />
          <div className="caption mirror">✌😁</div>
        </div>
      </div>
      <div id="teamwork" className="item">
        <div className="polaroid">
          <img src="\assets\team.jpeg" />
          <div className="caption">Teamwork</div>
        </div>
      </div>
      <div id="hobbies" className="item">
        <div className="polaroid">
          <img src="\assets\hobbies.jpg" />
          <div className="caption">🌱🎮🎲🍜📚</div>
        </div>
      </div>

      <div id="drogo" className="item">
        <div className="polaroid">
          <img src="\assets\Drogo.png" />
          <div className="caption">Drogo</div>
        </div>
      </div>
      <div id="capi" className="item">
        <div className="polaroid">
          <img src="\assets\Capi.png" />
          <div className="caption">Capi</div>
        </div>
      </div>
    </div>
  );
}

export default PhotosAbout;
