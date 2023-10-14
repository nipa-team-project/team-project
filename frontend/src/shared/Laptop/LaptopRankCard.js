import React from "react";
import theme from "../util/Theme";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 411.65px;
  height: 314.67px;
  border-radius: 10.78px;
  border: 2.16px solid ${theme.primary_80};
  background-color: ${theme.primary_20};
  position: relative;

  .laptop_img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .rank_img {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  }
`;

const LaptopRankCard = (props) => {
  return (
    <Container className={`${props.className}`}>
      <img src={props.img} alt={props.alt} className="laptop_img" />
      <img src={`/img/result/${props.rank}.png`} alt={`rank ${props.rank}`} className="rank_img" />
    </Container>
  );
};

export default LaptopRankCard;
