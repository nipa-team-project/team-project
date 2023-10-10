import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Filter.css";
import Modal from "./Modal";

const Filter = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchparamshandler = (sort, value) => {
    searchParams.set(`${sort}`, `${value}`);
    setSearchParams(searchParams);
  };

  const [showFilter, setShowFilter] = useState(false);
  const closefilter = () => {
    setShowFilter(false);
  };
  const openfilter = () => {
    setShowFilter(true);
  };

  const [dateIndex, setDateIndex] = useState(0);

  const [nameIndex, setNameIndex] = useState(0);

  const [ratingIndex, setRatingIndex] = useState(0);

  return (
    <React.Fragment>
      <Modal show={showFilter} onCancel={closefilter} className="filter-modal">
        <div className="filter-modal_title">
          <div className="filter-modal_title_text">필터</div>
          <img
            className="filter-modal_title_cancle"
            src="/img/modal/Cancle.png"
            alt="Cancle"
            onClick={closefilter}
          />
        </div>
        <div className="filter-modal_date">날짜</div>
        <div style={{ display: "flex" }}>
          {[
            ["전체", "all"],
            ["오름차순", "ascending"],
            ["내림차순", "descending"],
          ].map((menu, index) => (
            <div
              key={index}
              className={`filter-modal_menu center ${
                dateIndex === index ? " filter-modal_menu_active" : ""
              }`}
              onClick={() => {
                setDateIndex(index);
                searchparamshandler("date", menu[1]);
              }}
            >
              {menu[0]}
            </div>
          ))}
        </div>
        <div className="filter-modal_name">이름</div>
        <div style={{ display: "flex" }}>
          {[
            ["전체", "all"],
            ["오름차순", "ascending"],
            ["내림차순", "descending"],
          ].map((menu, index) => (
            <div
              key={index}
              className={`filter-modal_menu center ${
                nameIndex === index ? " filter-modal_menu_active" : ""
              }`}
              onClick={() => {
                setNameIndex(index);
                searchparamshandler("name", menu[1]);
              }}
            >
              {menu[0]}
            </div>
          ))}
        </div>
        <div className="filter-modal_name">등급</div>
        <div style={{ display: "flex", flexWrap: "wrap", width: "14rem" }}>
          {[
            ["전체", "all"],
            ["SS", "ss"],
            ["S", "s"],
            ["A", "a"],
            ["B", "b"],
            ["C", "c"],
          ].map((menu, index) => (
            <div
              key={index}
              className={`filter-modal_menu center ${
                ratingIndex === index ? " filter-modal_menu_active" : ""
              }`}
              onClick={() => {
                setRatingIndex(index);
                searchparamshandler("rating", menu[1]);
              }}
            >
              {menu[0]}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <div className="filter-modal_savebtn center" onClick={closefilter}>
            저장하기
          </div>
          <div className="filter-modal_canclebtn center" onClick={closefilter}>
            취소
          </div>
        </div>
      </Modal>
      <img
        className="filterimg"
        src="/img/rating/Filter.png"
        alt="filterimage"
      ></img>
      <div className="filter" onClick={openfilter}>
        {props.title}
      </div>
    </React.Fragment>
  );
};

export default Filter;
