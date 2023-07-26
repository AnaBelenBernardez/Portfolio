import React from "react";
import "./style.css";
import Separator from "../../../details/separator";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
