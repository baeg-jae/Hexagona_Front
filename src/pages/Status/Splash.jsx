import { StWrapFlex } from "components/Common/GlobalStyles";
import useSplash from "components/Hooks/useSplash";

const Splash = () => {
  useSplash();
  return (
    <StWrapFlex>
      <span className="smallSpan" style={{ margin: "0" }}>
        이번엔 꼭 내 인생을 갓생으로
      </span>
      <span className="bigSpan">갓생메이커</span>
    </StWrapFlex>
  );
};

export default Splash;
