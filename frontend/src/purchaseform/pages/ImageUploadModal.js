import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "./Modal";

const ImageUploadModal = ({ showModal, onClose, onImageUpload, target }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const image = acceptedFiles[0];
      setUploadedImage(URL.createObjectURL(image));
    },
  });

  const handleCancel = () => {
    onClose();
    setUploadedImage(null);
  };

  const handleUpload = () => {
    onImageUpload(uploadedImage, target);
    onClose();
    setUploadedImage(null);
  };

  return (
    <Modal visible={showModal} onClose={handleCancel}>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>이미지를 드래그하거나 클릭하여 파일을 선택하세요.</p>
      </div>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
      <button onClick={handleUpload} disabled={!uploadedImage}>
        업로드
      </button>
    </Modal>
  );
};

export default ImageUploadModal;
