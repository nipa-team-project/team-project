// Card.js

import React from "react";
import "./Card.css"; // 스타일 파일을 추가할 수 있습니다.

const Card = ({ title, description, imageUrl, openModal }) => {
  return (
    <div className="card" onClick={() => openModal(imageUrl)}>
      <div className="card-content">
        <img
          src={imageUrl}
          alt={title}
          className="card-image"
          style={{ width: "228px", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default Card;
