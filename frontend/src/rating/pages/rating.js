import React, { useState } from "react";

import "./rating.css";
import Filter from "../../shared/UIElements/Filter";

const Rating = () => {
  const [menuindex, setMenuIndex] = useState(0);
  return (
    <React.Fragment>
      <div className="rating">
        <div className="rating_title center">노트북 등급</div>
        <div className="rating_guide center">
          나의 노트북을 모아볼 수 있습니다.
        </div>
        <div className="rating_sort">
          {[
            "최근 등급 측정 노트북",
            "판매한 노트북",
            "내부 등급 측정 노트북",
          ].map((menu, index) => (
            <div
              key={index}
              className={`rating_sort_menu center ${
                menuindex === index ? " rating_sort_menu_active" : ""
              }`}
              onClick={() => setMenuIndex(index)}
            >
              {menu}
            </div>
          ))}
          <Filter>날짜순</Filter>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rating;
