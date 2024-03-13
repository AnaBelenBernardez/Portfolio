import React from "react";
import "./style.css";

function Links() {
  return (
    <div className="profile-links">
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
        <div className="svg-email">
          <svg width="100%" height="4rem" viewBox="0 0 78 58">
            <g>
              <path
                id="svg_2"
                fill="#182739"
                d="m70.3,0l-62.6,0c-4.3,0 -7.7,3.5 -7.7,7.7l0,42.5c0,4.3 3.5,7.7 7.7,7.7l62.5,0c4.3,0 7.7,-3.5 7.7,-7.7l0,-42.5c0.1,-4.2 -3.4,-7.7 -7.6,-7.7zm0.2,13.8l-15.4,15.5c0,0 0,0 0,0l12.4,12.4c0.8,0.8 0.8,2 0,2.8c-0.4,0.4 -0.9,0.6 -1.4,0.6s-1,-0.2 -1.4,-0.6l-12.5,-12.4c0,0 0,0 0,0l-7.6,7.6c-1.5,1.6 -3.6,2.3 -5.6,2.3s-4.1,-0.8 -5.6,-2.3l-7.5,-7.8l-13.5,13.6c-0.4,0.3 -0.9,0.5 -1.4,0.5s-1,-0.2 -1.4,-0.6c-0.8,-0.8 -0.8,-2 0,-2.8l13.5,-13.5c0,0 0,0 0,0l-15.6,-16.2c-0.8,-0.8 -0.7,-2.1 0.1,-2.8c0.8,-0.8 2.1,-0.7 2.8,0.1l25.8,26.8c1.5,1.5 4,1.5 5.5,0l26,-26c0.8,-0.8 2,-0.8 2.8,0c0.8,0.8 0.8,2 0,2.8z"
              />
            </g>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default Links;
