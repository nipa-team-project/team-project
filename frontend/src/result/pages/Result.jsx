import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../shared/util/Theme";
import PageTitle from "../../shared/Pagetitle/Pagetitle";
import styles from "./Result.module.css";
import LaptopRankCard from "../../shared/Laptop/LaptopRankCard";
import ProgressBar from "../../shared/UIElements/ProgressBar";
import Button from "../../shared/UIElements/Button";
import Modal from "../../shared/UIElements/Modal";

const Result = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalProcessOpen, setIsModalProcessOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openProcessModal = () => {
    setIsModalProcessOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalProcessOpen(false);
  };

  useEffect(() => {
    // 테마 설정
    document.documentElement.style.setProperty(
      "--rankColor",
      theme.primary_100
    );
    document.documentElement.style.setProperty(
      "--buttonColor",
      theme.primary_80
    );

    window.scrollTo(0, 0); // 페이지 렌더링 시 맨 위로 스크롤
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle title={"노트북 등급"} className={styles.title}>
        과연 내 노트북의 등급은?
      </PageTitle>
      <LaptopRankCard
        img={`/img/result/laptop.png`}
        rank="A"
        className={styles.rankcard}
      />
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
        <Button
          active={false}
          className={styles.prev_btn}
          onClick={() => navigate("/purchaseform")}
        >
          이전으로
        </Button>
        <Button active={true} className={styles.prev_btn} onClick={openModal}>
          내부 등급 측정하기
        </Button>
        <div id="backdrop-hook">
          <Modal show={isModalOpen} onCancel={closeModal}>
            <div className={styles.modal}>
              <img
                src="/img/result/Cancel.png"
                alt="cancel"
                className={styles.cancel}
                onClick={closeModal}
              />
              <img src="/img/result/Look_small.png" alt="look" />
              <div className={styles.modal_comment}>
                <p style={{ marginTop: "8px" }}>
                  내부 등급 측정을 <br /> 신청하시겠습니까?
                </p>
              </div>
              <div className={styles.modal_button}>
                <Button
                  active={false}
                  onClick={closeModal}
                  className={styles.btn}
                >
                  취소
                </Button>
                <Button
                  active={true}
                  onClick={openProcessModal}
                  className={styles.btn}
                >
                  신청하기
                </Button>
              </div>
            </div>
          </Modal>
        </div>
        <div id="backdrop-hook">
          <Modal show={isModalProcessOpen} onCancel={closeModal}>
            <div className={styles.modal} style={{ height: "261px" }}>
              <img
                src="/img/result/Cancel.png"
                alt="cancel"
                className={styles.cancel}
                onClick={closeModal}
              />
              <div className={styles.modal_comment}>
                <p style={{ margin: "22px 0 9px 0", fontWeight: "500" }}>
                  측정 신청이 완료되었습니다. <br /> 노트북을 아래 주소로
                  보내주세요!
                </p>

                <p className={styles.address}>
                  (주)도구모음: 서울특별시 강남구 봉은사로 <br /> 454 (금탁타워)
                  2층
                </p>
              </div>
              <div className={styles.modal_button}>
                <Button
                  active={true}
                  onClick={() => navigate("/process")}
                  className={styles.process_btn}
                >
                  진행 상황 확인하기
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Result;
