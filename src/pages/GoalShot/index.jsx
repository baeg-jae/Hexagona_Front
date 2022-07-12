import { StWrap } from "components/Common/GlobalStyles";
import NavigatorBar from "components/Common/NavigatorBar";
import styled from "@emotion/styled";
import flex from "components/Common/flex";

const GoalShot = () => {
  return (
    <>
      <StWrapFlex></StWrapFlex>

      <NavigatorBar />
    </>
  );
};

export default GoalShot;

const StWrapFlex = styled(StWrap)``;
