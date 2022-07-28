import React, { memo } from "react";
import Joyride from "react-joyride";

// 튜토리얼 컴포넌트
const JoyrideContainer = ({ run, steps, page }) => {
  // 스타일 옵션
  const defaultOptions = {
    arrowColor: "var(--white)",
    backgroundColor: "var(--white)",
    beaconSize: 36,
    overlayColor: "rgba(0, 0, 0, 0.5)",
    primaryColor: " var(--brown)",
    spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
    textColor: "var(--black)",
    width: undefined,
    zIndex: 100,
  };

  return (
    <Joyride
      continuous={true}
      run={run}
      steps={steps}
      styles={{ options: defaultOptions }}
      scrollToFirstStep={false}
      showProgress={true}
      showSkipButton={true}
      disableScrolling={true}
      disableScrollParentFix={true}
    />
  );
};

export default memo(JoyrideContainer);
