import React, { useState } from "react";
import "./Filter.css";
import Modal from "./Modal";

const Filter = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const closefilter = () => {
    setShowFilter(false);
  };
  const openfilter = () => {
    setShowFilter(true);
  };
  return (
    <React.Fragment>
      <Modal
        show={showFilter}
        onCancel={closefilter}
        className="filter-modal"
      ></Modal>
      <img
        className="filterimg"
        src="/img/rating/Filter.png"
        alt="filterimage"
      ></img>
      <div className="filter" onClick={openfilter}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Filter;
