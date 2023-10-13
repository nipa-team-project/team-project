import React from "react";
import { Link } from "react-router-dom";

import "./PurchaseForm.css";

const PurchaseForm = () => {
  return (
    <div className="container">
      <img className="rectangle" src="/img/purchaseimg/rectangle.png" />
      <div className="overlay">
        <div className="text-section">내 노트북의 등급은?</div>
        <div className="text-section2">
          노트북을 촬영한 사진을 분석한 후 손상 부위 별로 판단해
          <br /> 등급을 결정해주는 똑똑한 AI와 함께 편리한 판매를 경험해보세요.
        </div>

        <div className="button-section">
          <button>
            <Link to="/">등급제 보러가기</Link>
          </button>
        </div>
      </div>

      <div className="main_text">
        <h1>매입신청서 작성</h1>
      </div>
      <div className="main_text2">좋은 가격에 편하게 팔아요!</div>
      <form>
        <label htmlFor="deviceName">기기명</label>
        <input
          type="text"
          id="deviceName"
          placeholder="기기명을 입력해주세요."
        />

        <label htmlFor="modelName">모델명</label>
        <input
          type="text"
          id="modelName"
          placeholder="모델명을 입력해주세요."
        />

        <label htmlFor="productDetails">제품 특이사항</label>
        <input
          type="text"
          id="productDetails"
          placeholder="제품 특이사항을 입력해주세요."
        />
      </form>

      <div>
        <label>정면 사진</label>
        <input type="file" accept="image/*" />
      </div>

      <div>
        <label>뒷면 사진</label>
        <input type="file" accept="image/*" />
      </div>

      <div>
        <label>키보드 사진</label>
        <input type="file" accept="image/*" />
      </div>

      <div>
        <label>모니터 사진</label>
        <input type="file" accept="image/*" />
      </div>
    </div>
  );
};

export default PurchaseForm;
