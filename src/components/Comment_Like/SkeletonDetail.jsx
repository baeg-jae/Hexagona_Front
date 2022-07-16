import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { FlexRowDiv } from "components/Common/GlobalStyles";

const SkeletonDetail = () => {
  return (
    <StWrapComment>
      <StWrapFlex />
      <StReplyWrap></StReplyWrap>
      <FlexRowDiv>
        <StProfile />
        <StDiv></StDiv>
      </FlexRowDiv>
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
  width: 325px;
  height: 440px;
  margin-top: 59px;
  border-radius: 20px;
  background-color: var(--skeleton);
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
`;

const StDiv = styled.div`
  ${flex({})}
  width: 274px;
  height: 48px;
  margin-left: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  background-color: var(--skeleton);
`;
