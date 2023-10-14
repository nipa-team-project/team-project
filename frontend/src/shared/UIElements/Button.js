import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button className={`button ${props.active ? "active_button" : "inactive_button"} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
