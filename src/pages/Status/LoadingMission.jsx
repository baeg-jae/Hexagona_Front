import { MutatingDots } from "react-loader-spinner";
import { StWrapFlex } from "components/Common/GlobalStyles";

const LoadingMission = () => {
  return (
    <StWrapFlex className="main">
      <span>미션을 인증해 주셔서 감사합니다!</span>
      <span>잠시만 기다려주세요!</span>
      <MutatingDots color="var(--black)" height={100} width={100} />
    </StWrapFlex>
  );
};

export default LoadingMission;
