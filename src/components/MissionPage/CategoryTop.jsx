import { NavLink } from "react-router-dom";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const CategoryTop = () => {
  return (
    <StWrap>
      <div className="categoryDiv">
        <div className="innerDiv">
          <NavLink to="/home/exercise" className="linkTag">
            운동
          </NavLink>
          <div className="barLine"></div>
        </div>
        <div className="innerDiv">
          <NavLink to="/home/study" className="linkTag">
            학습
          </NavLink>
          <div className="barLine"></div>
        </div>
        <div className="innerDiv">
          <NavLink to="/home/life" className="linkTag">
            생활습관
          </NavLink>
          <div className="barLine"></div>
        </div>
        <div className="innerDiv">
          <NavLink to="/home/hobby" className="linkTag">
            취미생활
          </NavLink>
          <div className="barLine"></div>
        </div>
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
