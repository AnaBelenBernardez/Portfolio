import React from "react";
import { ProjectData } from "../../data/projects";
import { Link } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const data = ProjectData;

  return (
    <div className="projects">
      <div className="projects-section">
        {data.map((project, index) => (
          <Link to={`/project/${project.index}`}>
            <div className="project-card" key={index}>
              <div className="project-top-line">
                <p>{project.title}</p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="project-photo"
              />

              <div className="project-links">
                {project.demo && (
                  <a
                    className="project-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="link-button">
                      <i className="fi-rr-globe"></i>Demo
                    </div>
                  </a>
                )}
                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="link-button">
                      <i className="devicon-github-original colored"></i>GitHub
                    </div>
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
