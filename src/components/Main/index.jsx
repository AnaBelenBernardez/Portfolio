import React from "react";
import "./style.css";
import About from "./About/";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Front from "./Front";

function Main() {
  return (
    <div className="body">
      <section id="front">
        <Front />
      </section>
      <section id="about">
        <About />
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
