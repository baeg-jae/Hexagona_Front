import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import One from "assets/img/category2.png";
import Two from "assets/img/category1.png";
import Three from "assets/img/category4.png";
import Four from "assets/img/category3.png";

const handlePictureProps = (text) => {
  switch (text) {
    case "one":
      return One;
    case "two":
      return Two;
    case "three":
      return Three;
    case "four":
      return Four;
    default:
      return;
  }
};

const Main = () => {
  return (
    <StWrap>
      <StSpan className="titleText">목표</StSpan>
      <StFlexRowDiv>
        <StCategoryDiv pic="one">
          <span className="categoryText">운동하기</span>
        </StCategoryDiv>
        <StCategoryDiv pic="two">
          <span className="categoryText">생활습관</span>
        </StCategoryDiv>
        <StCategoryDiv pic="three">
          <span className="categoryText">학습</span>
        </StCategoryDiv>
        <StCategoryDiv pic="four">
          <span className="categoryText">취미생활</span>
        </StCategoryDiv>
      </StFlexRowDiv>
    </StWrap>
  );
};

export default Main;

const StWrap = styled.div`
  width: 100%;
  margin-top: 31px;
`;

const StSpan = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 130.5%;
  margin-left: 30.5px;
`;

const StFlexRowDiv = styled.div`
  ${flex({ gap: "15px" })}
  flex-wrap: wrap;
  margin-top: 24px;
`;

const StCategoryDiv = styled.div`
  ${flex({})}
  width: 156px;
  height: 156px;
  background-color: red;
  opacity: 0.4;
  border-radius: 11px;
  background-image: url(${(props) => handlePictureProps(props.pic)});
  background-size: cover;
  background-position: center;
  .categoryText {
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 49px;
  }
`;
