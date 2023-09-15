import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import ProjectCard from "./ProjectCard";

function ProjectPage() {
  const { t } = useTranslation();

  return (
    <div className="project">
      <Header />
      <main>
        <ProjectCard />
      </main>
    </div>
  );
}

export default ProjectPage;
