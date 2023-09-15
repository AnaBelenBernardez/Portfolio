import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Header from "../Header";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../data/projects";
import NotFoundPage from "../NotFoundPage";

function ProjectPage() {
  const { t } = useTranslation();
  const { id } = useParams();

  const project = ProjectData.find((project) => project.index === Number(id));

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="project">
      <Header />
      <main>
        <ProjectCard project={project} />
      </main>
    </div>
  );
}

export default ProjectPage;
