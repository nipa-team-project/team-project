import React from "react";
import { NavLink } from "react-router-dom";

import "./MobileNavi.css";

const MobileNavi = () => {
  return (
    <nav className="mobile-navi ">
      <NavLink to="/main">
        <img src="/img/navbar/menu1-2.png" className="menu1" />
      </NavLink>
      <NavLink to="/main">
        <img src="/img/navbar/menu2-2.png" className="menu2" />
      </NavLink>
      <NavLink to="/main">
        <img src="/img/navbar/menu3-2.png" className="menu3" />
      </NavLink>
      <NavLink to="/main">
        <img src="/img/navbar/menu4-2.png" className="menu4" />
      </NavLink>
    </nav>
  );
};

export default MobileNavi;
