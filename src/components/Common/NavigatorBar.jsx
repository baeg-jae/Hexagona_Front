import React from "react";
import styled from "@emotion/styled";
import flex from "./flex";
import { Link } from "react-router-dom";
import { FlexColumnDiv } from "./GlobalStyles";
import { FaCamera } from "react-icons/fa";

const NavigatorBar = () => {
  return (
    <StWrapFlex>
      <Link to={"/home"}>
        <span>MY</span>
      </Link>
      <Link to={"/goalshot"}>
        <FlexColumnDiv>
          <span className="smallText">Goal</span>
          <span className="smallText">Shot</span>
        </FlexColumnDiv>
      </Link>
      <Link to={"/feed"}>
        <span>Feed</span>
      </Link>
      <Link to={"/chat"}>
        <span>Chat</span>
      </Link>
      <FlexColumnDiv>
        <FaCamera />
      </FlexColumnDiv>
    </StWrapFlex>
  );
};

export default NavigatorBar;

const StWrapFlex = styled.div`
  ${flex({ justify: "space-around" })}
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 68px;
  text-align: center;
  border-top: 1px solid #e3e3e3;
  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #b9b9b9;
  }
  .smallText {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
  }
`;
