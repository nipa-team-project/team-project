import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";
import MenuLinks from "./MenuLinks";
import AuthLinks from "./AuthLinks";
import MobileNavi from "./MobileNavi";

const MainNavigation = () => {
  const [login, setLogin] = useState(false);
  const logintrue = () => {
    setLogin(true);
  };
  const loginfalse = () => {
    setLogin(false);
  };
  return (
    <React.Fragment>
      <header className="center header">
        <NavLink to="/main">
          <img src="/img/navbar/logo.png" className="header_logo" alt="logo" />
        </NavLink>
        <nav className="header_menu">
          <ul className="header_menu_links">{!login ? null : <MenuLinks />}</ul>
        </nav>
        <nav className="header_auth">
          <ul className="header_auth_links center">
            <AuthLinks
              login={login}
              logintrue={logintrue}
              loginfalse={loginfalse}
            />
          </ul>
        </nav>
      </header>
      {login && <MobileNavi />}
    </React.Fragment>
  );
};

export default MainNavigation;
