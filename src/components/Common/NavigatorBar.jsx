import React from "react";
import styled from "@emotion/styled";
import flex from "./flex";
import { NavLink } from "react-router-dom";
import { FlexColumnDiv } from "./GlobalStyles";
import { FaCamera } from "react-icons/fa";

const NavigatorBar = () => {
  return (
    <StWrapFlex>
      <NavLink to={"/home"}>
        <span>MY</span>
      </NavLink>
      <NavLink to={"/goalshot"}>
        <FlexColumnDiv>
          <span className="smallText">Goal</span>
          <span className="smallText">Shot</span>
        </FlexColumnDiv>
      </NavLink>
      <NavLink to={"/feed"}>
        <span>Feed</span>
      </NavLink>
      <NavLink to={"/chat"}>
        <span>Chat</span>
      </NavLink>
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
  background-color: #fff;
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
  .active {
    span {
      color: #212121 !important;
    }
  }
`;
