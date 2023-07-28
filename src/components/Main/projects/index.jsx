import React from "react";
import Separator from "../../../details/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./style.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
