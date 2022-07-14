import { fadeAnimation } from "components/Common/GlobalStyles";
import { SPLASH_FADE_ANIMATION } from "shared/data";
import { StWrap } from "components/Common/GlobalStyles";
import useSplash from "components/Hooks/useSplash";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const Splash = () => {
  useSplash();
  return (
    <StWrapFlex>
      <span className="smallSpan">이번엔 꼭 내 인생을 갓생으로</span>
      <span className="bigSpan">갓생메이커</span>
    </StWrapFlex>
  );
};

export default Splash;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  animation: ${fadeAnimation} ${SPLASH_FADE_ANIMATION}s ease;
  color: var(--brown);
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
    color: var(--gray);
  }
`;
