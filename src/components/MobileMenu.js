import React from "react";

import MobileTopMenuItem from "./MobileTopMenuItem.js";

const MobileMenu = ({ showMobileMenu, menuArray, ref }) => {
  return (
    <>
      {showMobileMenu && (
        <div className="mobileMenu">
          <div className="mobileMenuContainer">
            {menuArray.map((menu, index) => {
              return (
                <MobileTopMenuItem
                  key={menu.id}
                  menuId={menu.id}
                  menuHook={menu.hook}
                  onClickHandler={menu.handler}
                  altMenu={menu.altMenu}
                  ref={ref}
                />
              );
            })}
            <div className="horizontalRule"></div>
            <div className="menuLoginBtn">login</div>
            <div className="menuSignUpBtn">sign up</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
