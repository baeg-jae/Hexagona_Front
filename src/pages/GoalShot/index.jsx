import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import XIcon from "assets/img/Vector.png";
import Dog from "assets/img/Dog.png";
import NavigatorBar from "components/Common/NavigatorBar";
import { StWrap } from "components/Common/GlobalStyles";

const GoalShot = ({ text, category }) => {
  return (
    <>
      <StWrapFlex>
        <StImgDiv>
          <div className="gradientImg">
            <div className="text">
              {/* 중요- 추후에 카테고리 생성시 text props로 대체되야 합니다 */}
              <span className="firstText">강아지 산책시키기</span>
              {/* 중요- 추후에 카테고리 생성시 category props로 대체되야 합니다 */}
              <span className="secondText">취미 생활</span>
            </div>
          </div>
        </StImgDiv>
        <div className="circle">
          <StCircleDiv>
            <span>
              <img src={XIcon} alt="" />
            </span>
          </StCircleDiv>
          <StCircleDiv>
            <span>❤</span>
          </StCircleDiv>
        </div>
      </StWrapFlex>
      <NavigatorBar />
    </>
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
    margin-bottom: 39.62px;
  }
`;

const StImgDiv = styled.div`
  position: relative;
  width: 100%;
  height: 592.58px;
  border-radius: 30px;
  margin-top: 59.21px;
  background-image: url(${Dog});
  background-size: cover;
  background-position: center;

  .gradientImg {
    ${flex({ direction: "column", align: "flex-start", justify: "flex-end" })};
    width: 100%;
    height: 100%;
    background-color: gradient(0.14deg, #000000 0.09%, rgba(0, 0, 0, 0) 32.15%);
  }

  .text {
    ${flex({ direction: "column", align: "flex-start", justify: "flex-end" })};
    font-weight: 700;
    margin-left: 17.05px;
    color: var(--white);
  }
  .firstText {
    font-weight: 700;
    font-size: 30.0802px;
    line-height: 130%;
    margin-bottom: 8.04px;
  }
  .secondText {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 66.1765px;
    padding: 5.01337px 10.0267px;
    margin-bottom: 16.37px;
    font-weight: 400;
    font-size: 13.0348px;
    line-height: 130%;
  }
`;

const StCircleDiv = styled.div`
  position: relative;
  width: 81.38px;
  height: 81.38px;
  background: #ffffff;
  box-shadow: 10.8513px 9.49487px 23.059px rgba(0, 0, 0, 0.1);
  border-radius: 51.5436px;
  margin: 0 11px 0 11px;

  &:last-child {
    color: #fff;
    background: linear-gradient(
      180deg,
      #ff0000 0%,
      rgba(255, 107, 0, 0.76) 100%
    );
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    font-size: 46.1179px;
    line-height: 130%;
    img {
      width: 29.19px;
      height: 29.19px;
    }
  }
`;
