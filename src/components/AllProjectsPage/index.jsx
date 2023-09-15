import React from "react";
import "./style.css";
import Header from "../Header";
import Projects from "./Projects";

function AllProjectsPage() {
  return (
    <div className="all">
      <Header />
      <main>
        <Projects />
      </main>
    </div>
  );
}

export default AllProjectsPage;
