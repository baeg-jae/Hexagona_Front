import { NavLink } from "react-router-dom";
import { FlexColumnDiv } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const CategoryTop = () => {
  return (
    <StWrap>
      <div className="categoryDiv">
        <FlexColumnDiv>
          <div className="innerCategory">
            <div className="innerDiv">
              <NavLink to="/home/exercise" className="linkTag">
                <span>운동</span>
                <StBar />
              </NavLink>
            </div>
            <div className="innerDiv">
              <NavLink to="/home/study" className="linkTag">
                학습
                <StBar />
              </NavLink>
            </div>
            <div className="innerDiv">
              <NavLink to="/home/life" className="linkTag">
                생활습관
                <StBar big />
              </NavLink>
            </div>
            <div className="innerDiv">
              <NavLink to="/home/hobby" className="linkTag">
                취미생활
                <StBar big />
              </NavLink>
            </div>
          </div>
          <div className="barLine"></div>
        </FlexColumnDiv>
      </div>
    </StWrap>
  );
};

export default CategoryTop;

const StWrap = styled.div`
  ${flex({ direction: "column" })}
  .categoryDiv {
    ${flex({ justify: "flex-start" })}
    .innerDiv {
      ${flex({ direction: "column" })}
      margin-left: 32px;
      &:first-of-type {
        margin-left: 27px;
      }
      .linkTag {
        position: relative;
        font-size: 13px;
        color: var(--gray-5);
        margin-bottom: 11px;
      }
    }
    .innerCategory {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }
  .barLine {
    width: 345px;
    border: 1px solid var(--gray-3);
    margin-bottom: 26px;
  }

  .active {
    color: var(--black) !important;
    div {
      border: 1px solid var(--black);
    }
  }
`;

const StBar = styled.div`
  position: absolute;
  left: -9px;
  bottom: -12.5px;
  width: ${(props) => (props.big ? `60px` : `40px`)};
`;
