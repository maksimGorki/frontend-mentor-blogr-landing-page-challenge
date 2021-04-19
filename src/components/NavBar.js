import React from "react";

import NavBarItem from "./NavBarItem.js";

const NavBar = ({ menuArray, ref }) => {
  return (
    <div className="navBar">
      {menuArray.map((menu, index) => {
        return (
          <NavBarItem
            key={menu.id}
            menuId={menu.id}
            menuHook={menu.hook}
            onClickHandler={menu.handler}
            altMenu={menu.altMenu}
            ref={ref}
          />
        );
      })}
      <div className="loginBtn">login</div>
      <div className="signUpBtn">sign up</div>
    </div>
  );
};

export default NavBar;
