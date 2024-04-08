import React from "react";
import "./style.css";

function Photo() {
  return (
    <div className="photo-container">
      <div className="photo">
        <div className="photo-left">
          <img
            id="photo-star"
            className="stars"
            src="/assets/bling.svg"
            alt="Star"
          />
          <img
            id="photo-star"
            className="stars"
            src="/assets/bling.svg"
            alt="Star"
          />
        </div>
        <img
          id="my-photo"
          loading="lazy"
          src="./assets/photo.png"
          alt="Ana Belén"
          title="Ana Belén"
        />
        <img
          className="stars"
          src="/assets/bling.svg"
          alt="Star"
          id="photo-right"
        />
      </div>
    </div>
  );
}

export default Photo;
