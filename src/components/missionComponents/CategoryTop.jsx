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
        </div>
        <div className="innerDiv">
          <NavLink to="/home/study" className="linkTag">
            학습
          </NavLink>
        </div>
        <div className="innerDiv">
          <NavLink to="/home/life" className="linkTag">
            생활습관
          </NavLink>
        </div>
        <div className="innerDiv">
          <NavLink to="/home/hobby" className="linkTag">
            취미생활
          </NavLink>
        </div>
      </div>
      <div className="borderBar"></div>
    </StWrap>
  );
};

export default CategoryTop;

const StWrap = styled.div`
  ${flex({ direction: "column" })}
  width: 100%;
  .categoryDiv {
    ${flex({ justify: "space-evenly" })}
    width: 100%;
    .innerDiv {
      ${flex({ justify: "flex-start" })}
      width: 100%;
      .linkTag {
        font-weight: 500;
        font-size: 13px;
        line-height: 130%;
        color: #b7b7b7;
        margin-left: 27px;
        margin-bottom: 10px;
        &:first-of-type {
          margin-left: 24px;
        }
      }
    }
  }

  .borderBar {
    width: 345px;
    border: 1px solid #eaeaea;
    margin-bottom: 26px;
  }
  .active {
    color: #212121 !important;
  }
`;
