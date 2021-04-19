import React from "react";
import { useState, useRef, useEffect } from "react";

import { ReactComponent as Logo } from "../projectFiles/images/logo.svg";
import HamburgerMenu from "./HamburgerMenu.js";
import MobileMenu from "./MobileMenu.js";
import NavBar from "./NavBar.js";

const Header = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showConnectMenu, setShowConnectMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  let menuArray = [
    {
      id: "product",
      hook: showProductMenu,
      handler: setShowProductMenu,
      altMenu: [
        "Overview",
        "Pricing",
        "Marketplace",
        "Features",
        "Integrations",
      ],
    },
    {
      id: "company",
      hook: showCompanyMenu,
      handler: setShowCompanyMenu,
      altMenu: ["About", "Team", "Blog", "Careers"],
    },
    {
      id: "connect",
      hook: showConnectMenu,
      handler: setShowConnectMenu,
      altMenu: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.currentTarget)) {
        if (event.target.id === "product") {
          setShowCompanyMenu(false);
          setShowConnectMenu(false);
        } else if (event.target.id === "company") {
          setShowProductMenu(false);
          setShowConnectMenu(false);
        } else if (event.target.id === "connect") {
          setShowProductMenu(false);
          setShowCompanyMenu(false);
        } else {
          setShowProductMenu(false);
          setShowCompanyMenu(false);
          setShowConnectMenu(false);
        }
      }
    };
    document.addEventListener("mouseup", handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="header">
      <Logo className="logo" />
      <HamburgerMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <MobileMenu
        showMobileMenu={showMobileMenu}
        menuArray={menuArray}
        ref={ref}
      />
      <NavBar menuArray={menuArray} ref={ref} />
      <div className="headerTitle">A modern publishing platform</div>
      <div className="headerCatchword">
        Grow your audience and build your online brand
      </div>
      <div className="headerBtnsContainer">
        <div className="startBtn">Start for Free</div>
        <div className="learnMoreBtn">Learn More</div>
      </div>
    </div>
  );
};

export default Header;
