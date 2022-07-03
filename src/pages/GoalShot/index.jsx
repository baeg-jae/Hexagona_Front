import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { StWrap } from "components/Common/GlobalStyles";

const GoalShot = ({ text, category }) => {
  return (
    <StWrapFlex>
      <StImgDiv>
        <div className="text">
          {/* 중요- 추후에 카테고리 생성시 text props로 대체되야 합니다 */}
          <span className="firstText">강아지 산책시키기</span>
          {/* 중요- 추후에 카테고리 생성시 category props로 대체되야 합니다 */}
          <span className="secondText">취미 생활</span>
        </div>
      </StImgDiv>
      <div className="circle">
        <StCircleDiv>
          <span>💔</span>
        </StCircleDiv>
        <StCircleDiv>
          <span>❤️</span>
        </StCircleDiv>
      </div>
    </StWrapFlex>
  );
};

export default GoalShot;

const StWrapFlex = styled(StWrap)`
  ${flex({ align: "flex-start" })}
  position: relative;
  .circle {
    ${flex({})}
    position: absolute;
    bottom: 10%;
  }
`;

const StImgDiv = styled.div`
  position: relative;
  width: 95%;
  height: 80%;
  border-radius: 30px;
  margin-top: 2rem;
  background-image: url("https://huchu.link/fra0sHh");
  background-size: cover;
  background-position: center;

  .text {
    ${flex({ direction: "column", align: "flex-start" })};
    position: absolute;
    bottom: 5%;
    left: 10%;
    font-weight: 700;
    color: var(--white);
  }
  .firstText {
    font-size: 1.4rem;
    text-shadow: 2px 2px 0 var(--black), 2px -2px 0 var(--black),
      -2px 2px 0 var(--black), -2px -2px 0 var(--black), 2px 0px 0 var(--black),
      0px 2px 0 var(--black), -2px 0px 0 var(--black), 0px -2px 0 var(--black);
  }
  .secondText {
    font-size: 0.7rem;
    border-radius: 30px;
    padding: 0.5rem 1rem;
    background-color: rgba(211, 211, 211, 0.5);
  }
`;

const StCircleDiv = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: var(--white);
  border-radius: 100%;
  border: 1px solid black;
  span {
    position: absolute;
    font-size: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
