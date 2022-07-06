import React from "react";
import styled from "@emotion/styled";
import flex from "./flex";
import { FlexColumnDiv } from "./GlobalStyles";
import { FaCamera } from "react-icons/fa";

const NavigatorBar = () => {
  return (
    <StWrapFlex>
      <span>MY</span>
      <FlexColumnDiv style={{ width: "20%" }}>
        <span className="smallText">Goal</span>
        <span className="smallText">Shot</span>
      </FlexColumnDiv>
      <span>Feed</span>
      <span>Chat</span>
      <FlexColumnDiv style={{ width: "20%" }}>
        <FaCamera style={{ color: "#b9b9b9" }} />
      </FlexColumnDiv>
    </StWrapFlex>
  );
};

export default NavigatorBar;

const StWrapFlex = styled.div`
  ${flex({ justify: "space-around" })}
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 68px;
  text-align: center;
  border-top: 1px solid #e3e3e3;
  span {
    width: 20%;
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
  .Camera {
    width: 20px;
    height: 18px;
  }
`;
