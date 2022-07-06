import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { handlePictureProps } from "components/Common/ButtonPropsHandler";
import { Link } from "react-router-dom";
import { StWidth } from "components/Common/GlobalStyles";

const Main = () => {
  return (
    <StWidth>
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
  width: 345px;
  height: 140px;
  margin-bottom: 8px;
  border-radius: 11px;
  background-image: url(${(props) => handlePictureProps(props.pic)});
  background-size: cover;
  background-position: center;
`;
