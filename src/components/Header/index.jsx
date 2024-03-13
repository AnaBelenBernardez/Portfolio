import React from "react";
import "./style.css";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="sticky-header">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
