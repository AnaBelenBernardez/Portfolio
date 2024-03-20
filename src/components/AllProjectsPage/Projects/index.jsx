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
          // <Link to={`/project/${project.index}`} key={index}>
          <div className="project-card">
            <div className="project-top-line">
              <p>{project.title}</p>
            </div>
            <img
              loading="lazy"
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
                    <svg
                      id="demo-project"
                      width="15"
                      height="15"
                      viewBox="0 0 100 99"
                    >
                      <switch>
                        <g id="svg_2">
                          <g id="svg_3">
                            <path
                              id="svg_4"
                              d="m5273.1,2400.1l0,-2c0,-2.8 -5,-4 -9.7,-4s-9.7,1.3 -9.7,4l0,2c0,1.8 0.7,3.6 2,4.9l5,4.9c0.3,0.3 0.4,0.6 0.4,1l0,6.4c0,0.4 0.2,0.7 0.6,0.8l2.9,0.9c0.5,0.1 1,-0.2 1,-0.8l0,-7.2c0,-0.4 0.2,-0.7 0.4,-1l5.1,-5c1.3,-1.3 2,-3.1 2,-4.9zm-9.7,-0.1c-4.8,0 -7.4,-1.3 -7.5,-1.8l0,0c0.1,-0.5 2.7,-1.8 7.5,-1.8c4.8,0 7.3,1.3 7.5,1.8c-0.2,0.5 -2.7,1.8 -7.5,1.8z"
                            />
                            <path
                              id="svg_5"
                              d="m5268.4,2410.3c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1l4.3,0c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1l-4.3,0z"
                            />
                            <path
                              id="svg_6"
                              d="m5272.7,2413.7l-4.3,0c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1l4.3,0c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1z"
                            />
                            <path
                              id="svg_7"
                              d="m5272.7,2417l-4.3,0c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1l4.3,0c0.6,0 1,-0.4 1,-1c0,-0.5 -0.4,-1 -1,-1z"
                            />
                          </g>
                          <g id="svg_8">
                            <path
                              id="svg_9"
                              d="m83.9,70.3c0,7.5 -6.1,13.6 -13.6,13.6l-40.6,0c-7.5,0 -13.6,-6.1 -13.6,-13.6l0,-40.6c0,-7.5 6.1,-13.6 13.6,-13.6l11.8,0l0,-13.6l-11.8,0c-15,0 -27.2,12.2 -27.2,27.2l0,40.5c0,15 12.2,27.2 27.2,27.2l40.5,0c15,0 27.2,-12.2 27.2,-27.2l0,-11.7l-13.5,0l0,11.8z"
                            />
                            <path
                              id="svg_10"
                              d="m90.7,2.5l-34.1,0l0,13.6l17.7,0l-37.6,37.6c-2.7,2.6 -2.7,7 0,9.6c1.3,1.3 3.1,2 4.8,2s3.5,-0.7 4.8,-2l37.6,-37.6l0,17.7l13.6,0l0,-34.1c0,-3.8 -3,-6.8 -6.8,-6.8z"
                            />
                          </g>
                        </g>
                      </switch>
                    </svg>
                    Web
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
                    <i
                      id="github-project"
                      className="devicon-github-original colored"
                    ></i>
                    GitHub
                  </div>
                </a>
              )}
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
