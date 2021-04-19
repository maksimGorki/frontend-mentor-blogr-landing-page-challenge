import React from "react";

import { ReactComponent as Logo } from "../projectFiles/images/logo.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="rightSideMargin"></div>
      <Logo />
      <div className="footerColumn">
        <div className="footerColumnTitle">Product</div>
        <div className="footerColumnItem">Overview</div>
        <div className="footerColumnItem">Pricing</div>
        <div className="footerColumnItem">Marketplace</div>
        <div className="footerColumnItem">Features</div>
        <div className="footerColumnItem">Integrations</div>
      </div>
      <div className="footerColumn">
        <div className="footerColumnTitle">Company</div>
        <div className="footerColumnItem">About</div>
        <div className="footerColumnItem">Team</div>
        <div className="footerColumnItem">Blog</div>
        <div className="footerColumnItem">Careers</div>
      </div>
      <div className="footerColumn">
        <div className="footerColumnTitle">Connect</div>
        <div className="footerColumnItem">Contact</div>
        <div className="footerColumnItem">Newsletter</div>
        <div className="footerColumnItem">LinkedIn</div>
      </div>
    </div>
  );
};

export default Footer;
