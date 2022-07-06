import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import One from "assets/img/category1.png";
import Two from "assets/img/category2.png";
import Three from "assets/img/category3.png";
import Four from "assets/img/category4.png";

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
      <StFlexRowDiv>
        <StCategoryDiv pic="one"></StCategoryDiv>
        <StCategoryDiv pic="two"></StCategoryDiv>
        <StCategoryDiv pic="three"></StCategoryDiv>
        <StCategoryDiv pic="four"></StCategoryDiv>
      </StFlexRowDiv>
    </StWrap>
  );
};

export default Main;

const StWrap = styled.div`
  width: 100%;
`;

const StFlexRowDiv = styled.div`
  ${flex({ direction: "column" })}
  flex-wrap: wrap;
  margin-top: 28px;
`;

const StCategoryDiv = styled.div`
  ${flex({})}
  width: 345px;
  height: 140px;
  margin-bottom: 8px;
  border-radius: 11px;
  background-image: url(${(props) => handlePictureProps(props.pic)});
  background-size: cover;
  background-position: center;
`;
