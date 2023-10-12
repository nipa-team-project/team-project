import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../shared/util/Theme";

const blink = keyframes`
  50% {
    background-color: ${theme.neutral_20};
  }
`;

const Center = styled.div`
  position: relative;
  width: 1440px;

  .ai_robot {
    position: absolute;
    width: 377px;
    height: 289.61px;
    top: 252px;
    left: 596px;
  }

  .description {
    position: absolute;
    top: 638px;
    left: 586px;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 144%;
    text-align: center;
  }

  .theme_color {
    color: ${theme.primary_100};
  }

  .loading_dots {
    position: absolute;
    display: flex;
    top: 600px;
    left: 700.67px;
    color: ${theme.primary_100};
    text-align: center;
  }

  .loader__dot {
    animation: ${blink} 1s infinite;
    text-align: center;
    width: 12px;
    height: 12px;
    margin-left: 2px;
    background-color: ${theme.primary_100};
    border-radius: 50%;
    margin-right: 6px;
  }

  .loader__dot:nth-child(2) {
    animation-delay: 230ms;
  }

  .loader__dot:nth-child(3) {
    animation-delay: 480ms;
  }
`;

const Div = styled.div`
  position: relative;

  .b_star1 {
    position: absolute;
    left: 402px;
    top: 174px;
    width: 99.07px;
    height: 99.07px;
  }

  .p_star {
    position: absolute;
    top: 240px;
    left: 314px;
    width: 133.83px;
    height: 133.83px;
  }

  .ai {
    position: absolute;
    top: 462px;
    left: 327px;
    transform: rotate(-23.53deg);
    width: 175.13px;
    height: 82.15px;
  }

  .b_star2 {
    position: absolute;
    left: 995px;
    top: 590px;
    width: 86px;
    height: 86px;
  }

  .bad {
    position: absolute;
    top: 200px;
    left: 808.58px;
    width: 197.23px;
    height: 60.16px;
    transform: rotate(-19.72deg);
  }

  .great {
    width: 193.4px;
    height: 155.21px;
    position: absolute;
    top: 282px;
    left: 902px;
    right: 308.06px;
    transform: rotate(30.85deg);
  }
`;

const Loading = () => {
  const [loading, setLoading] = useState(true);
  return (
    <React.Fragment>
      <Div>
        <img src="/img/loading/BlueStar.png" alt="BlueStar" className="b_star1" />
        <img src="/img/loading/PinkStar.png" alt="PinkStar" className="p_star" />
        <img src="/img/loading/AI.png" alt="AI" className="ai" />
      </Div>

      <Div>
        <div className="bad">
          <img src="/img/loading/Bad.png" alt="Bad" />
        </div>
        <div className="great">
          <img src="/img/loading/Great.png" alt="Great" />
        </div>
        <div className="b_star2">
          <img src="/img/loading/BlueStar.png" alt="BlueStar" />
        </div>
      </Div>
      <Center>
        <div className="ai_robot">
          <img src="/img/loading/AILoading.png" alt="AILoading" />
        </div>

        {loading ? (
          <div className="loading_dots">
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
          </div>
        ) : (
          <div>error</div>
        )}

        <div className="description">
          <span className="theme_color">AI</span>가 <span className="theme_color">등급을 측정중</span>입니다.
        </div>
      </Center>
    </React.Fragment>
  );
};

export default Loading;
