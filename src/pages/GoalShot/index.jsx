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
        <div style={{ display: "flex" }}>
          {Array.from(
            [1, 2, 3].map(() => {
              return (
                <StImgDiv>
                  <div className="gradientImg">
                    <div className="text">
                      {/* 중요- 추후에 카테고리 생성시 text props로 대체되야 합니다 */}
                      <span className="firstText">운동하기</span>
                      {/* 중요- 추후에 카테고리 생성시 category props로 대체되야 합니다 */}
                      <span className="secondText">크로스핏 다녀오기</span>
                    </div>
                  </div>
                </StImgDiv>
              );
            })
          )}
        </div>

        <StButtonDiv>
          <StButton>대단해요!</StButton>
          <StButton color="white">좀 더 노력해요</StButton>
        </StButtonDiv>
        {/* 버튼 2개 */}
        {/* <div className="circle">
          <StCircleDiv>
            <span>
              <img src={XIcon} alt="" />
            </span>
          </StCircleDiv>
          <StCircleDiv>
            <span>❤</span>
          </StCircleDiv>
        </div> */}
      </StWrapFlex>

      <NavigatorBar />
    </>
  );
};

export default GoalShot;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  position: relative;
  .circle {
    ${flex({})}
    position: absolute;
    bottom: 10%;
    margin-bottom: 39.62px;
  }
`;

const StImgDiv = styled.div`
  ${flex({ direction: "column", justify: "flex-end" })}
  position: relative;
  width: 285px;
  height: 480px;
  border-radius: 20px;
  margin-top: 56px;
  background-image: url(${Dog});
  background-size: cover;
  background-position: center;
  &:nth-child(1) {
    margin: 106px 10px 0 0;
  }
  &:nth-child(3) {
    margin: 106px 0 0 10px;
  }

  .gradientImg {
    ${flex({ direction: "column", align: "flex-start", justify: "flex-end" })}
    width: 100%;
    height: 50%;
    border-radius: 20px;
    background: linear-gradient(
      0.14deg,
      #000000 0.09%,
      rgba(0, 0, 0, 0) 32.15%
    );
  }

  .text {
    ${flex({ direction: "column", align: "flex-start", justify: "flex-end" })};
    font-weight: 700;
    margin-left: 17.05px;
    color: var(--white);
  }
  .firstText {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    margin-bottom: 8.04px;
  }
  .secondText {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    border-radius: 66.1765px;
    margin-bottom: 16.37px;
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

const StButtonDiv = styled.div`
  ${flex({ direction: "column" })}
  margin-top: 50px;
`;

const StButton = styled.button`
  width: 283px;
  height: 56px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  background-color: ${(props) =>
    props.color === "white" ? "#fff" : "#2C2825"};
  color: ${(props) => (props.color === "white" ? "#2C2825" : "#fff")};
`;
