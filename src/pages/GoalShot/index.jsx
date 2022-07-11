import { StWrap } from "components/Common/GlobalStyles";
import NavigatorBar from "components/Common/NavigatorBar";
import styled from "@emotion/styled";
import flex from "components/Common/flex";

const GoalShot = () => {
  return (
    <>
      <StWrapFlex>
        <StButtonDiv>
          <StButton>대단해요!</StButton>
          <StButton color="white">좀 더 노력해요</StButton>
        </StButtonDiv>
      </StWrapFlex>

      <NavigatorBar />
    </>
  );
};

export default GoalShot;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  position: relative;
  .circle {
    ${flex({})}
    position: absolute;
    bottom: 10%;
    margin-bottom: 39.62px;
  }
`;

const StButtonDiv = styled.div`
  ${flex({ direction: "column" })}
  margin-top: 50px;
`;

const StButton = styled.button`
  width: 283px;
  height: 56px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  background-color: ${(props) =>
    props.color === "white" ? "var(--white)" : "var(--goalShotButton)"};
  color: ${(props) =>
    props.color === "white" ? "var(--goalShotButton)" : "var(--white)"};
`;
