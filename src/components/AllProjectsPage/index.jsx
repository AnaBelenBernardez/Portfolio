import React, { useEffect, useState } from "react";
import "./style.css";
import Projects from "./Projects";
import ScrollToTop from "../details/ScrollToTop";
import SideNav from "../SideNav";
import Skills from "../Skills";
import { useTranslation } from "react-i18next";
import Loading from "../details/Loading";

function AllProjectsPage() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className="all-projects">
      {isLoading && <Loading />}
      <Skills />
      <Projects />
      <SideNav />
      <ScrollToTop />
    </main>
  );
}

export default AllProjectsPage;
