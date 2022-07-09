import React, { useState } from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import XIcon from "assets/img/Vector.png";
import Dog from "assets/img/Dog.png";
import NavigatorBar from "components/Common/NavigatorBar";
import { StWrap } from "components/Common/GlobalStyles";
import Slider from "react-touch-drag-slider";

const GoalShot = ({ text, category }) => {
  const [index, setIndex] = useState(1);

  const setFinishedIndex = (i) => {
    console.log("finished dragging on slide", i);
    setIndex(i);
  };
  return (
    <>
      <StWrapFlex>
        <StDiv>
          <Slider
            onSlideComplete={setFinishedIndex}
            onSlideStart={(i) => {
              console.clear();
              console.log("started dragging on slide", i);
            }}
            activeIndex={index}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}
            style={{ width: "100%", height: "100%" }}
          >
            {Array.from(
              [1, 2, 3].map((v, i) => {
                return (
                  <StImgDiv key={i}>
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
          </Slider>
        </StDiv>

        <StButtonDiv>
          <StButton>대단해요!</StButton>
          <StButton color="white">좀 더 노력해요</StButton>
        </StButtonDiv>
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

const StDiv = styled.div`
  width: 285px;
  height: 800px;
`;

const StImgDiv = styled.div`
  ${flex({ direction: "column", align: "flex-end", justify: "flex-end" })}
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;

  background-image: url(${Dog});
  background-size: cover;
  background-position: center;
  &:nth-of-type(1) {
    margin: 106px 10px 0 0;
  }
  &:nth-of-type(3) {
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
