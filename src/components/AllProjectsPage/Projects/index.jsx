import React from "react";
import { ProjectData } from "../../data/projects";
import ProjectCard from "../../ProjectPage/ProjectCard";
import "./style.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const data = ProjectData;

  return (
    <div className="projects">
      <label className="section-title">
        {t("translation.projectsSection")}
      </label>
      <div className="projects-section">
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
