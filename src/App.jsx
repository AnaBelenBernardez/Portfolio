import { useState } from "react";
import "./App.css";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Photo from "./components/Photo";
import Position from "./components/Position";
import SectionText from "./components/SectionText";
import SectionTitle from "./components/SectionTitle";
import Spark from "./components/Spark";
import Star from "./components/Star";

function App() {
  return (
    <div className="app">
      <>
        <Bio />
        <Contact />
        <Footer />
        <Header />
        <Loading />
        <Photo />
        <Position />
        <SectionText />
        <SectionTitle />
        <Spark />
        <Star />
      </>
    </div>
  );
}

export default App;
