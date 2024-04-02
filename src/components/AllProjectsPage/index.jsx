import React from "react";
import "./style.css";
import Projects from "./Projects";
import ScrollToTop from "../details/ScrollToTop";
import SideNav from "../SideNav";
import Skills from "../Skills";
import { useTranslation } from "react-i18next";

function AllProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="all">
      <main>
        <Skills />
        <Projects />
        <SideNav />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default AllProjectsPage;
