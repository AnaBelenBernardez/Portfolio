import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollToTop from "./details/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
