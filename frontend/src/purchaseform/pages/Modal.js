import React from "react";
import "./Modal.css";

const Modal = ({ visible, onClose, children }) => {
  if (!visible) return null;

  const handleModalClick = (e) => {
    // 모달 내의 콘텐츠 영역을 클릭한 경우에는 모달이 닫히지 않도록 방지
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        {/* 닫기 버튼 */}
        <span className="close-btn" onClick={onClose}>
          x
        </span>

        {/* 모달 콘텐츠 */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
