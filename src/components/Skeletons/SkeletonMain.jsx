import flex from "components/Common/flex";
import styled from "@emotion/styled";

const SkeletonMain = () => {
  return (
    <div className="main">
      <StWrap>
        <StWrapFlex>
          <HeaderWrap></HeaderWrap>
        </StWrapFlex>
      </StWrap>
      <StFlexRowDiv>
        <StCategoryDiv></StCategoryDiv>
        <StCategoryDiv></StCategoryDiv>
        <StCategoryDiv></StCategoryDiv>
        <StCategoryDiv></StCategoryDiv>
      </StFlexRowDiv>
    </div>
  );
};

export default SkeletonMain;

const StWrap = styled.div`
  ${flex({})}
  width: 100%;
`;

const StWrapFlex = styled.div`
  ${flex({ align: "flex-start" })}
  width: 342px;
  height: 56px;
  margin-top: 62px;
`;

const HeaderWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 100%;
  height: 100%;
`;

const StCategoryDiv = styled.div`
  ${flex({})}
  position: relative;
  width: 345px;
  height: 140px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: var(--skeleton);
`;

const StFlexRowDiv = styled.div`
  ${flex({ direction: "column" })}
  flex-wrap: wrap;
  margin-top: 28px;
`;
