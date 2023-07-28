import React from "react";
import "./style.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank">
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank">
              <div className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
      </div>
      <img src={project.image} alt={project.title} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
