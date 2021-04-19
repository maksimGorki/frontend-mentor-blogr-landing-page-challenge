import React from "react";

import NavBarAltMenuItem from "./NavBarAltMenuItem.js";
import { ReactComponent as ArrowLight } from "../projectFiles/images/icon-arrow-light.svg";

const NavBarItem = ({ menuId, menuHook, onClickHandler, altMenu, ref }) => {
  return (
    <div
      className="navBarItem"
      id={menuId}
      onClick={() => {
        onClickHandler(!menuHook);
      }}
      ref={ref}
    >
      {menuId}
      <ArrowLight
        className={`arrowLight ${menuHook ? "openMenu" : "closeMenu"}`}
      />
      {menuHook && (
        <div className="dropMenu">
          <div className="dropMenuContainer">
            {altMenu.map((altMenuItem, index) => {
              return (
                <NavBarAltMenuItem key={index} altMenuTitle={altMenuItem} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarItem;
