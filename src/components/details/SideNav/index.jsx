import React from "react";
import "./style.css";

function SideNav() {
  return (
    <div className="side-navigator">
      <a
        href="https://github.com/AnaBelenBernardez"
        target="_blank"
        title="GitHub"
      >
        <i className="devicon-github-original"></i>
      </a>
      <a
        target="blank"
        title="LinkedIn"
        href="https://www.linkedin.com/in/anabelenbernardez/"
      >
        <i className="devicon-linkedin-plain"></i>
      </a>
      <a href="mailto:anabelenbernardez@gmail.com" title="e-mail">
        <img className="email" src="/assets/email.svg" />
      </a>
    </div>
  );
}

export default SideNav;
