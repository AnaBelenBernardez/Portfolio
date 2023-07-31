import React from "react";
import "./style.css";
import Nav from "./Nav";
import LanguageSelector from "../LanguageSelector";

function Header() {
  return (
    <div className="sticky-header">
      <header className="header">
        <Nav />
        <LanguageSelector />
      </header>
    </div>
  );
}

export default Header;
