import React from "react";
import "./style.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Front from "./Front";

function Main() {
  return (
    <div className="main">
      <section id="front">
        <Front />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Main;
