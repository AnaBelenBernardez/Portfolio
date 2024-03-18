import React from "react";
import "./style.css";

function PhotosAbout() {
  return (
    <div className="photosAbout">
      <div id="teamwork" class="item">
        <div class="polaroid">
          <img src="\assets\team.jpeg" />
          <div class="caption">Teamwork</div>
        </div>
      </div>
      <div id="thats-me" class="item">
        <div class="polaroid">
          <img src="\assets\yep_thats_me.jpg" />
          <div class="caption mirror">✌😁</div>
        </div>
      </div>
      <div id="drogo" class="item">
        <div class="polaroid">
          <img src="\assets\Drogo.png" />
          <div class="caption">Drogo</div>
        </div>
      </div>
      <div id="capi" class="item">
        <div class="polaroid">
          <img src="\assets\Capi.jpg" />
          <div class="caption">Capi</div>
        </div>
      </div>
      <div id="hobbies" class="item">
        <div class="polaroid">
          <img src="\assets\hobbies.jpg" />
          <div class="caption">🌱🎮🎲🍜📚</div>
        </div>
      </div>
    </div>
  );
}

export default PhotosAbout;
