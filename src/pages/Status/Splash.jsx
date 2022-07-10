import { StWrap } from "components/Common/GlobalStyles";
import useSplash from "components/Hooks/useSplash";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { scaleAnimation, fadeAnimation } from "components/Common/GlobalStyles";

const Splash = () => {
  useSplash();
  return (
    <StWrapFlex>
      <span className="smallSpan" style={{ margin: "0" }}>
        이번엔 꼭 내 인생을 갓생으로
      </span>
      <StSpan className="bigSpan">갓생메이커</StSpan>
    </StWrapFlex>
  );
};

export default Splash;

const StSpan = styled.span`
  animation: ${scaleAnimation} 1s infinite;
`;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  animation: ${fadeAnimation} 3s ease;
  color: #665547;
  .bigSpan {
    font-weight: 700;
    font-size: 64px;
    line-height: 130%;
    margin-bottom: 6px;
  }
  .smallSpan {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 42px;
    color: #555555;
  }
`;
