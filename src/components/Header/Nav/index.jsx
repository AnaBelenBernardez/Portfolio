import React from "react";
import "./style.css";

function Nav() {
  return (
    <section id="nav">
      <a href="#front">Front Page</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="CVs\ESP_CV_AnaBelen_Bernardez_Martinez.pdf" download>
        Download CV
      </a>
    </section>
  );
}

export default Nav;
