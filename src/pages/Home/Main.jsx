import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { handlePictureProps } from "components/Common/ButtonPropsHandler";
import { Link } from "react-router-dom";
import { StWidth } from "components/Common/GlobalStyles";
import {
  categoryBGColorHandler,
  categoryTextColorHandler,
} from "components/Common/ButtonPropsHandler";

const Main = () => {
  return (
    <StWidth>
      <StFlexRowDiv>
        <Link to={"/home/exercise"}>
          <StCategoryDiv pic="one">
            <span className="innerText" col="one">
              운동하기
            </span>
          </StCategoryDiv>
        </Link>
        <Link to={"/home/study"}>
          <StCategoryDiv pic="two">
            <span className="innerText">학습</span>
          </StCategoryDiv>
        </Link>
        <Link to={"/home/life"}>
          <StCategoryDiv pic="three">
            <span className="innerText">생활습관</span>
          </StCategoryDiv>
        </Link>
        <Link to={"/home/hobby"}>
          <StCategoryDiv pic="four">
            <span className="innerText">취미생활</span>
          </StCategoryDiv>
        </Link>
      </StFlexRowDiv>
    </StWidth>
  );
};

export default Main;

const StFlexRowDiv = styled.div`
  ${flex({ direction: "column" })}
  flex-wrap: wrap;
  margin-top: 28px;
`;

const StCategoryDiv = styled.div`
  ${flex({})}
  position: relative;
  width: 345px;
  height: 140px;
  margin-bottom: 8px;
  border-radius: 11px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => handlePictureProps(props.pic)});
  .innerText {
    position: absolute;
    bottom: 0%;
    left: 0%;
    padding: 7px 25px;
    margin: 0 0 11px 16px;
    border-radius: 82px;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    background-color: ${(props) => categoryBGColorHandler(props.pic)};
    color: ${(props) => categoryTextColorHandler(props.pic)};
  }
`;
