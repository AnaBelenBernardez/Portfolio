import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import AllProjectsPage from "./components/AllProjectsPage";
import ProjectPage from "./components/ProjectPage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
