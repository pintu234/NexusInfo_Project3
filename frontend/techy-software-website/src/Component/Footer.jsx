import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Footer.css";
import InformationForm from "./InformationForm";
function Footer() {
  return (
    <footer className="footer">
      <div className="fo">
        <div className="ul-footer">
          <a href="/Home">Home</a>
          <a href="/AboutUS">About US </a>
          <a href="/ProductServices">Product/Services </a>
          <a href="/ContactUS">Contact US </a>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/company/nexus-software-pvt-ltd/"
            target="new"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=918778993293"
            target="new"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/nexusinfo.in/" target="new">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <p>&copy;2024 Techy Software. All rights reserved.</p>
      <InformationForm />
    </footer>
  );
}

export default Footer;
