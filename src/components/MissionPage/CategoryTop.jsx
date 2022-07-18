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
        position: relative;
        font-weight: 500;
        font-size: 13px;
        line-height: 130%;
        color: #b7b7b7;
        margin-bottom: 10px;
      }
    }
    .innerCategory {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }
  .barLine {
    width: 300px;
    border: 0.1px solid #eaeaea;
    margin-bottom: 26px;
    margin-left: 10px;
  }

  .active {
    color: #212121 !important;
    div {
      border: 1px solid black;
    }
  }
`;

const StBar = styled.div`
  position: absolute;
  left: -9px;
  bottom: -13px;
  width: ${(props) => (props.big ? `60px` : `40px`)};
`;
