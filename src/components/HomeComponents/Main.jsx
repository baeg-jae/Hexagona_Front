import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import One from "assets/img/category1.png";
import Two from "assets/img/category2.png";
import Three from "assets/img/category3.png";
import Four from "assets/img/category4.png";
import { Link } from "react-router-dom";

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
        <Link to={"/home/exercise"}>
          <StCategoryDiv pic="one"></StCategoryDiv>
        </Link>
        <Link to={"/home/study"}>
          <StCategoryDiv pic="two"></StCategoryDiv>
        </Link>
        <Link to={"/home/life"}>
          <StCategoryDiv pic="three"></StCategoryDiv>
        </Link>
        <Link to={"/home/hobby"}>
          <StCategoryDiv pic="four"></StCategoryDiv>
        </Link>
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
