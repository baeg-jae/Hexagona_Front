import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Button from "components/Common/Button";

const FirstPage = ({ onStartBtnHandler }) => {
  return (
    <StFirstPageDiv>
      <span>이번엔 꼭 내 인생을 갓생으로</span>
      <span className="bigFont">갓생메이커</span>
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
  font-size: 20px;
  color: var(--white);
  text-align: center;
  letter-spacing: -0.02em;
  .bigFont {
    font-weight: 700;
    font-size: 48px;
  }
  & > Button {
    margin: 25px 0 58px 0;
  }
`;
