import React from "react";
import "./style.css";
import Nav from "./Nav";

function Header() {
  return (
    <div className="sticky-header">
      <header className="header">
        <Nav />
      </header>
    </div>
  );
}

export default Header;
