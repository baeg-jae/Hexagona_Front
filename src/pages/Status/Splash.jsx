import { fadeAnimation } from "components/Common/GlobalStyles";
import { SPLASH_FADE_ANIMATION } from "shared/data";
import { StWrap } from "components/Common/GlobalStyles";
import { useState } from "react";
import useSplash from "components/Hooks/useSplash";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import SplashDataSwiper from "components/Status/SplashDataSwiper";

const Splash = () => {
  const [flag, setFlag] = useState(false);
  useSplash(setFlag);
  return (
    <StOutDiv>
      {!flag ? (
        <StWrapFlex>
          <span className="smallSpan">이번엔 꼭 내 인생을 갓생으로</span>
          <span className="bigSpan">갓생메이커</span>
        </StWrapFlex>
      ) : (
        <SplashDataSwiper />
      )}
    </StOutDiv>
  );
};

export default Splash;

const StOutDiv = styled.div`
  .slider {
    ${flex({ direction: "column", justify: "flex-start", align: "flex-start" })}
    width: 90%;
    height: 90vh;
    color: #141414;
    line-height: 130%;
    .bigSpanDiv {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      margin: 84px 0 0 26px;
    }
    .smallSpanDiv {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      margin: 24px 0 0 26px;
    }
    .imgDiv {
      ${flex({
        direction: "column",
      })}
      width: 100%;
      overflow-y: scroll;
    }
    .smallSpan {
      font-size: 16px;
    }
    .bigSpan {
      font-weight: 700;
      font-size: 32px;
      margin-top: 20px;
    }
    button {
      margin-top: 10px;
    }
  }
`;

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
    font-size: 20px;
    line-height: 130%;
    color: var(--gray);
  }
`;
