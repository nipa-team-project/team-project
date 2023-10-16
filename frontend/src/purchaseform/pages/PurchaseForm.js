// PurchaseForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Modal from "./Modal";
import "./PurchaseForm.css";

const PurchaseForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleImageUpload = (image) => {
    setSelectedImage(image);
  };
  const handleImageReset = () => {
    setSelectedImage(null);
  };

  const handleImageSubmit = () => {
    // 이미지 업로드 처리 로직을 추가하세요.
    console.log("이미지가 업로드되었습니다:", selectedImage);
  };

  const cardsData = [
    { imageUrl: "/img/purchaseimg/front.png" },
    { imageUrl: "/img/purchaseimg/back.png" },
    { imageUrl: "/img/purchaseimg/keyboard.png" },
    { imageUrl: "/img/purchaseimg/monitor.png" },
  ];

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
      <div className="main_text">매입신청서 작성</div>
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
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} openModal={openModal} />
        ))}
      </div>
      <Modal
        visible={isModalOpen}
        onClose={closeModal}
        onImageUpload={handleImageUpload}
        onImageReset={handleImageReset}
      >
        {selectedImage && <img src={selectedImage} alt="Uploaded" />}
      </Modal>
      {/* 이미지 업로드 버튼 */}
      <div className="btns">
        <button className="reset_btn">초기화</button>
        <button className="rank_btn">AI 등급 측정하기</button>
      </div>
    </div>
  );
};

export default PurchaseForm;
