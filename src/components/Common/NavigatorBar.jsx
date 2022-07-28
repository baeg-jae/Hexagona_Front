import { FlexColumnDiv } from "./GlobalStyles";
import { MOBILE_SIZE_WIDTH } from "shared/data";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import flex from "./flex";

const NavigatorBar = () => {
  return (
    <StWrapFlex>
      <NavLink to={"/home"}>
        <span>마이</span>
      </NavLink>
      <NavLink to={"/goalshot"}>
        <FlexColumnDiv>
          <span>인증샷</span>
        </FlexColumnDiv>
      </NavLink>
      <NavLink to={"/feed"}>
        <span>피드</span>
      </NavLink>
      <NavLink to={"/chat"}>
        <span>채팅</span>
      </NavLink>
    </StWrapFlex>
  );
};

export default NavigatorBar;

const StWrapFlex = styled.div`
  ${flex({ justify: "space-evenly" })}
  position: fixed;
  bottom: 0;
  width: ${MOBILE_SIZE_WIDTH}px;
  height: 68px;
  text-align: center;
  background-color: var(--white);
  border-top: 1px solid var(--gray-1);
  @media screen and (max-width: 420px) {
    width: 100%;
  }

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: var(--gray-5);
  }
  .active {
    span {
      color: var(--black);
    }
  }
`;
