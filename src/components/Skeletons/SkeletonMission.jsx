import flex from "components/Common/flex";
import styled from "@emotion/styled";
const SkeletonMission = () => {
  return (
    <StWrap>
      <StContainer>
        <StWrapOne>
          <div className="categoryDiv">
            <div className="innerDiv">
              <span className="linkTag">운동</span>
              <div className="barLine"></div>
            </div>
            <div className="innerDiv">
              <span className="linkTag">학습</span>
              <div className="barLine"></div>
            </div>
            <div className="innerDiv">
              <span className="linkTag">생활습관</span>
              <div className="barLine"></div>
            </div>
            <div className="innerDiv">
              <span className="linkTag">취미생활</span>
              <div className="barLine"></div>
            </div>
          </div>
        </StWrapOne>
        <StWrapTwo></StWrapTwo>
      </StContainer>
    </StWrap>
  );
};

export default SkeletonMission;
const StWrap = styled.div`
  ${flex({ direction: "column" })};
  width: 100%;
`;

const StContainer = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-start",
  })}
  width: 345px;
  height: 497px;
  margin-top: 40px;
`;

const StWrapTwo = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 345px;
  height: 105px;
  background-color: var(--skeleton);
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const StWrapOne = styled.div`
  ${flex({ direction: "column" })}
  width: 100%;
  .categoryDiv {
    ${flex({ justify: "flex-start" })}
    width: 100%;
    .innerDiv {
      ${flex({ direction: "column" })}
      margin-left: 32px;
      &:first-of-type {
        margin-left: 27px;
      }
      .linkTag {
        font-weight: 500;
        font-size: 13px;
        line-height: 130%;
        color: #b7b7b7;
        margin-bottom: 10px;
      }
    }
  }
  .barLine {
    width: 40px;
    border: 1px solid #eaeaea;
    margin-bottom: 26px;
  }

  .active {
    color: #212121 !important;
  }
`;
