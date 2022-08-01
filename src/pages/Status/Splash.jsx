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
    color: var(--black);
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
    }
    .smallSpan {
      font-size: 16px;
      color: var(--gray-6);
    }
    .bigSpan {
      font-weight: 700;
      font-size: 32px;
      margin-top: 20px;
      font-family: Pretendard_Bold;
    }
    button {
      margin-top: 10px;
    }
  }
  @media screen and (max-height: 820px) {
    .bigSpanDiv {
      margin: 10px 0 0 26px !important;
    }
  }
  @media screen and (max-height: 820px) {
    .bigSpanDiv {
      margin: 10px 0 0 26px !important;
    }
  }
  @media screen and (max-width: 340px) {
    .smallSpan {
      font-size: 12px !important;
    }
    button {
      width: 280px;
    }
  }
  @media screen and (max-width: 280px) {
    .bigSpan {
      font-size: 18px !important;
      margin-top: 2px !important;
    }
    button {
      width: 260px;
    }
  }
`;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  animation: ${fadeAnimation} ${SPLASH_FADE_ANIMATION}s ease;
  color: var(--brown);
  .bigSpan {
    font-weight: 700;
    font-family: Pretendard_Bold;
    font-size: 64px;
    margin-bottom: 6px;
  }
  .smallSpan {
    font-size: 20px;
    color: var(--gray-7);
  }
`;
