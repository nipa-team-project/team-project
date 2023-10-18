import React from "react";
import { NavLink } from "react-router-dom";

import "./AuthLinks.css";

const AuthLinks = (props) => {
  const login = props.login;
  return (
    <React.Fragment>
      {!login ? (
        <>
          <li className="header_links_auth_list">
            <NavLink to="/">회원가입</NavLink>
          </li>
          <span className="auth_vector"></span>
          <li className="header_links_auth_list">
            <NavLink to="/result" onClick={props.logintrue}>
              로그인
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="header_links_auth_list">
            <NavLink to="/">내 정보 수정</NavLink>
          </li>
          <span className="auth_vector"></span>
          <li className="header_links_auth_list">
            <NavLink to="/main" onClick={props.loginfalse}>
              로그아웃
            </NavLink>
          </li>
        </>
      )}
    </React.Fragment>
  );
};

export default AuthLinks;
