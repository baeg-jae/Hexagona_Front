import { FlexColumnDiv } from "./GlobalStyles";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import flex from "./flex";
import useGetUser from "components/Hooks/User/useGetUser";

const NavigatorBar = () => {
  const { data } = useGetUser();
  console.log(data);
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
        <StDiv>
          <span>채팅</span>
          {data?.noticeCount > 0 && (
            <StCircleAlert>{data?.noticeCount}</StCircleAlert>
          )}
        </StDiv>
      </NavLink>
    </StWrapFlex>
  );
};

export default NavigatorBar;

const StWrapFlex = styled.div`
  ${flex({ justify: "space-evenly" })}
  position: absolute;
  bottom: 0;
  width: 420px;
  height: 68px;
  background-color: var(--white);
  border-top: 1px solid var(--gray-1);
  @media screen and (max-width: 420px) {
    width: 100%;
  }
  span {
    font-size: 15px;
    color: var(--gray-5);
  }
  .active {
    span {
      font-weight: 700;
      font-family: "Pretendard_Bold";
      color: var(--black);
    }
  }
`;

const StCircleAlert = styled.div`
  ${flex({})}
  position: absolute;
  top: -15px;
  right: -22px;
  width: 24px;
  height: 24px;
  background: #e2efff;
  border-radius: 20px;
  color: #006ffd;
`;

const StDiv = styled.div`
  position: relative;
`;
