import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollToTop from "./components/details/ScrollToTop";
import SideNav from "./components/details/SideNav";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <div className="app">
      <Header />
      <SideNav />
      <LanguageSelector />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
