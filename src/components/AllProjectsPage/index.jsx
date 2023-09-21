import React from "react";
import "./style.css";
import Projects from "./Projects";
import ScrollToTop from "../details/ScrollToTop";
import SideNav from "../SideNav";
import Skills from "../Skills";

function AllProjectsPage() {
  return (
    <div className="all">
      <main>
        <Skills />
        {/* <Projects /> */}
        <SideNav />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default AllProjectsPage;
