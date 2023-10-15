import React, { useState, useEffect } from "react";
import styles from "./Process.module.css";
import PageTitle from "../../shared/Pagetitle/Pagetitle";
import LaptopRankCard from "../../shared/Laptop/LaptopRankCard";

const Process = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 렌더링 시 맨 위로 스크롤
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle title={"진행 상황"} className={styles.title}>
        내 노트북의 등급 측정 상황
      </PageTitle>

      <div className={styles.modelContainer}>
        <LaptopRankCard img={`/img/process/laptop.png`} rank="rank_A" className={styles.rankcard} />
        <p className={styles.model_title}>맥북 에어</p>
        <p className={styles.model_description}>
          모델명: NT950XBE-X716A <br /> 등록일: 2023. 09. 08
        </p>
      </div>
    </div>
  );
};

export default Process;
