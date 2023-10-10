import React from "react";
import styled from "styled-components";
import theme from "../../shared/util/Theme";

const Center = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <React.Fragment>
      <Center>
        <img src="/img/loading/AILoading.png" alt="AILoading" />
        <div>
          <span>AI</span>가 <span>등급을 측정중</span>입니다.
        </div>
        <div></div>
      </Center>
    </React.Fragment>
  );
};

export default Loading;
