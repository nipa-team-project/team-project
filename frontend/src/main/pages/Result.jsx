import React, { useState, useEffect } from "react";
import theme from "../../shared/util/Theme";
import PageTitle from "../../shared/Pagetitle/Pagetitle";
import styles from "./Result.module.css";
import LaptopRankCard from "../../shared/Laptop/LaptopRankCard";
import ProgressBar from "../../shared/UIElements/ProgressBar";
import Button from "../../shared/UIElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Loading from "../pages/Loading";

const Result = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // 테마 설정
    document.documentElement.style.setProperty("--rankColor", theme.primary_100);
    document.documentElement.style.setProperty("--buttonColor", theme.primary_80);
  }, []);

  console.log(isModalOpen);

  return (
    <div className={styles.container}>
      <PageTitle title={"노트북 등급"} className={styles.title}>
        과연 내 노트북의 등급은?
      </PageTitle>
      <LaptopRankCard img={`/img/result/laptop.png`} rank="A" className={styles.rankcard} />
      <div className={styles.result_description}>
        맥북 에어는 <span className={styles.rank}>{`${"A"}`}등급</span>입니다!
      </div>
      <div className={styles.progress}>
        <ProgressBar category="front" damaged={30} />
        <ProgressBar category="back" damaged={50} />
        <ProgressBar category="keyboard" damaged={30} />
        <ProgressBar category="monitor" damaged={30} />
      </div>
      <div className={styles.button_group}>
        <Button active={false}>이전으로</Button>
        <Button active={true} onClick={openModal}>
          내부 등급 측정하기
        </Button>
        <div id="backdrop-hook">
          <Modal show={isModalOpen} onCancel={closeModal} className={styles.modal}>
            {/* Content to display inside the modal */}
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Result;
