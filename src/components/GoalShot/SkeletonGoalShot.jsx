import { FlexRowDiv } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const SkeletonCard = () => {
  return (
    <>
      <StCardContainer>
        <StCard differ />
        <StCard />
        <StCard differ />
      </StCardContainer>
      <FlexRowDiv style={{ gap: "16px" }}>
        <StButton />
        <StButton />
      </FlexRowDiv>
    </>
  );
};

export default SkeletonCard;

const StCardContainer = styled.div`
  ${flex({ gap: "10px", align: "flex-start" })}
  width: 100%;
  height: 537px;
`;

const StCard = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-end",
    align: "flex-start",
  })}
  min-width: 285px;
  height: 480px;
  background-color: #f5f0f0;
  box-shadow: 6px 11px 17px rgba(0, 0, 0, 0.13);
  border-radius: 20px;
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
`;

const StButton = styled.button`
  ${flex({})}
  width: 95.38px;
  height: 95.38px;
  margin-top: 63px;
  border: 1px solid #f5f0f0;
  box-shadow: 6px 11px 17px rgba(0, 0, 0, 0.13);
  border-radius: 48.0529px;
`;
