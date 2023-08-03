import React from "react";
import "./style.css";

function SideNav() {
  return (
    <div className="side-navigator">
      <a
        target="blank"
        title="LinkedIn"
        href="https://www.linkedin.com/in/anabelenbernardez/"
      >
        <i className="devicon-linkedin-plain"></i>
      </a>
      <a
        href="https://github.com/AnaBelenBernardez"
        target="_blank"
        title="GitHub"
      >
        <i className="devicon-github-original"></i>
      </a>
      <a href="mailto:anabelenbernardez@gmail.com" title="e-mail">
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Email"
            role="img"
            viewBox="0 0 512 512"
          >
            <rect
              width="512"
              height="512"
              rx="15%"
              fill="#ffffff"
              id="id_101"
            ></rect>
            <rect
              width="356"
              height="256"
              x="78"
              y="128"
              fill="#182739"
              rx="8%"
              id="id_102"
            ></rect>
            <path
              fill="none"
              stroke="#ffffff"
              stroke-width="20"
              d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256"
              id="id_103"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default SideNav;
