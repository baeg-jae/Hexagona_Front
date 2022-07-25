import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { SkeletonAnim } from "components/Common/GlobalStyles";

const SkeletonDetail = () => {
  return (
    <StWrapComment>
      <StWrapFlex />
      <StReplyWrap />
      <StFlex>
        <StProfile />
        <StDiv />
      </StFlex>
    </StWrapComment>
  );
};

export default SkeletonDetail;

const StWrapComment = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
  margin-bottom: 160px;
`;

const StWrapFlex = styled.div`
  ${flex({})}
  width: calc(100% - 32px);
  height: 440px;
  margin-top: 59px;
  border-radius: 4px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StReplyWrap = styled.div`
  width: 100%;
  height: 170px;
  margin: 10px;
  margin-top: 35px;
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StDiv = styled.div`
  ${flex({})}
  width: calc(100% - 90px);
  height: 40px;
  margin-left: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StFlex = styled.div`
  ${flex({})}
  width: 100%;
  margin-top: 30px;
`;
