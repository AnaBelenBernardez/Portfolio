import React from "react";
import "./style.css";
import Nav from "./Nav";
import LanguageSelector from "../LanguageSelector";

function Header() {
  return (
    <div className="sticky-header">
      <header className="header">
        <div className="header-container">
          <Nav />
        </div>
        <LanguageSelector />
      </header>
    </div>
  );
}

export default Header;
