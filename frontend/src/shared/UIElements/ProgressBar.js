import React from "react";
import styled from "styled-components";
import GraphBar from "@ramonak/react-progress-bar";
import theme from "../util/Theme";

const GraphContainer = styled.div`
  display: flex;
  margin-top: 18px;
  justify-content: center;
  align-items: center;

  .bar_container {
    background-color: ${theme.primary_20};
    border-radius: 50px;
  }

  .bar_wrapper {
    width: 669px;
    height: 17px;
    margin-left: 26px;
    margin-right: 8px;
  }

  .damaged_percent {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 24px;
    line-height: 34.56px;
    align: right;
    color: ${theme.primary_100};
  }
`;

const ProgressBar = (props) => {
  return (
    <GraphContainer>
      <div>
        {/* 파손도 아이콘이미지(앞면/옆면/키보드/액정 props에 따라 이미지 설정하기) */}
        <img src={`/img/result/${props.category}_WithText.png`} alt="damage_cate"></img>
      </div>
      <div>
        <GraphBar
          completed={props.damaged}
          maxCompleted={100}
          className="bar_wrapper"
          barContainerClassName="bar_container"
          bgColor={theme.primary_100}
          isLabelVisible={false}
          animateOnRender={true}
          initCompletedOnAnimation="0"
        />
      </div>
      <div className="damaged_percent">
        {/* 파손도 글씨 (35%) */}
        {props.damaged}%
      </div>
    </GraphContainer>
  );
};

export default ProgressBar;
