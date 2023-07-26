import React from "react";
import "./style.css";
import Bio from "./Bio/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Contact from "./contact/index";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <Bio />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
