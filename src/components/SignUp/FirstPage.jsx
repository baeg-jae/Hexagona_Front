import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Button from "components/Common/Button";

const FirstPage = ({ onStartBtnHandler }) => {
  return (
    <StFirstPageDiv>
      <span>올해는 꼭!</span>
      <span className="bigFont">내 인생을</span>
      <span className="bigFont">갓생으로</span>
      <Button
        click={onStartBtnHandler}
        className="StartBtn"
        text="시작하기"
        theme="white"
      >
        시작하기
      </Button>
    </StFirstPageDiv>
  );
};

export default FirstPage;

const StFirstPageDiv = styled.div`
  ${flex({ direction: "column", justify: "flex-end" })}
  width: 100%;
  height: 100%;
  background-image: linear-gradient(blue, pink);
  background-size: cover;
  background-position: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  .bigFont {
    font-size: 2.5rem;
  }
`;
