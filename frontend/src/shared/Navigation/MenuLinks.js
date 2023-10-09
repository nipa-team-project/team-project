import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuLinks.css";

const MenuLinks = () => {
  return (
    <React.Fragment>
      <li className="header_links_menu_list">
        <NavLink to="/">구매하기</NavLink>
      </li>
      <li className="header_links_menu_list">
        <NavLink to="/">매입신청서</NavLink>
      </li>
      <li className="header_links_menu_list">
        <NavLink to="/">노트북 등급</NavLink>
      </li>
      <li className="header_links_menu_list">
        <NavLink to="/">등급제</NavLink>
      </li>
    </React.Fragment>
  );
};

export default MenuLinks;
