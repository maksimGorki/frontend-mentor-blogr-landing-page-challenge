import React from "react";

import { ReactComponent as Hamburger } from "../projectFiles/images/icon-hamburger.svg";
import { ReactComponent as Close } from "../projectFiles/images/icon-close.svg";

const HamburgerMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <div>
      {showMobileMenu ? (
        <Close className="hamburger" onClick={() => setShowMobileMenu(false)} />
      ) : (
        <Hamburger
          className="hamburger"
          onClick={() => setShowMobileMenu(true)}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
