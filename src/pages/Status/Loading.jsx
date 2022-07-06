import { MutatingDots } from "react-loader-spinner";
import { StWrapFlex } from "components/Common/GlobalStyles";

const Loading = () => {
  return (
    <StWrapFlex>
      <MutatingDots color="#000" height={100} width={100} />
    </StWrapFlex>
  );
};

export default Loading;
