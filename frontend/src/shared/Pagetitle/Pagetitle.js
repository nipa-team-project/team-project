import React from "react";
import "./Pagetitle.css";

const Pagetitle = (props) => {
  return (
    <React.Fragment>
      <div className="pagetitle_title center">{props.title}</div>
      <div className="pagetitle_guide center">{props.children}</div>
    </React.Fragment>
  );
};

export default Pagetitle;
