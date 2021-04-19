import React from "react";

import MobileAltMenuItem from "./MobileAltMenuItem.js";
import { ReactComponent as ArrowDark } from "../projectFiles/images/icon-arrow-dark.svg";

const MobileTopMenuItem = ({
  menuId,
  menuHook,
  onClickHandler,
  altMenu,
  ref,
}) => {
  return (
    <div className="topMenuItem">
      <div
        className="topMenuHeader"
        id={menuId}
        onClick={() => onClickHandler(!menuHook)}
        ref={ref}
      >
        {menuId}
        <ArrowDark className={`${menuHook ? "openMenu" : "closeMenu"}`} />
      </div>
      {menuHook && (
        <div className="mobileAltMenu">
          {altMenu.map((altMenuItem, index) => {
            return <MobileAltMenuItem key={index} altMenuTitle={altMenuItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MobileTopMenuItem;
