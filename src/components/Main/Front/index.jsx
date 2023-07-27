import React from "react";
import "./style.css";
import Photo from "./Photo";
import Position from "./Position";

function Front() {
  return (
    <div className="front">
      <Photo />
      <h1>Ana Belén Bernárdez Martínez</h1>
      <Position />
    </div>
  );
}

export default Front;
