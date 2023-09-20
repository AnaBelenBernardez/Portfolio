import React from "react";
import "./style.css";
import Nav from "./Nav";
import LanguageSelector from "../LanguageSelector";

function Header() {
  return (
    <header className="header">
      <div className="sticky-header">
        <div className="header-container">
          <Nav />
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;
