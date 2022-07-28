import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { SkeletonAnim } from "components/Common/GlobalStyles";

const SkeletonDetail = () => {
  return (
    <StWrapComment>
      <StDetail>
        <StWrapFlex />
        <StReplyWrap />
        <StFlex>
          <StProfile />
          <StDiv />
        </StFlex>
      </StDetail>

      <StNavBar />
    </StWrapComment>
  );
};

export default SkeletonDetail;

const StWrapComment = styled.div`
  ${flex({ direction: "column" })}
  height: 100%;
`;
const StDetail = styled.div`
  ${flex({ direction: "column", justify: "space-between" })}
  width: 100%;
  height: 100%;
`;

const StWrapFlex = styled.div`
  ${flex({})}
  height: 440px;
  margin-top: 59px;
  border-radius: 16px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StReplyWrap = styled.div`
  position: fixed;
  top: calc(100% - 150px);
  height: 92px;
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-left: 8px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StDiv = styled.div`
  ${flex({})}
  width: calc(100% - 20px);
  height: 40px;
  margin-left: 12px;
  border-radius: 55px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StFlex = styled.div`
  ${flex({})}
  top: calc(100% - 150px);
  width: calc(100% - 32px);
  margin-bottom: 20px;
`;

const StNavBar = styled.div`
  ${flex({ justify: "space-evenly" })}
  bottom: 0;
  width: 420px;
  height: 68px;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
