import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contact">
      <p>
        I would love to tell you more about myself.{" "}
        <a href="mailto:anabelenbernardez@gmail.com" title="e-mail">
          Contact me!
        </a>
      </p>
      <div className="socials">
        <a
          target="blank"
          title="GitHub"
          href="https://github.com/AnaBelenBernardez"
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
      </div>
    </div>
  );
}

export default Contact;
