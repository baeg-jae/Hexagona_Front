import { Link } from "react-router-dom";
import { handlePictureProps } from "components/Common/ButtonPropsHandler";
import {
  categoryBGColorHandler,
  categoryTextColorHandler,
} from "components/Common/ButtonPropsHandler";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const CategoryLink = ({ url, picName, text }) => {
  return (
    <Link to={url}>
      <StCategoryDiv pic={picName}>
        <span className="innerText" col={picName}>
          {text}
        </span>
      </StCategoryDiv>
    </Link>
  );
};

export default CategoryLink;

const StCategoryDiv = styled.div`
  ${flex({})}
  position: relative;
  width: 345px;
  height: 140px;
  margin-bottom: 8px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => handlePictureProps(props.pic)});
  border-radius: 16px;
  @media screen and (max-height: 800px) {
    height: 130px;
  }
  @media screen and (max-height: 760px) {
    height: 120px;
  }
  @media screen and (max-height: 720px) {
    height: 110px;
  }
  @media screen and (max-height: 635px) {
    height: 100px;
  }
  @media screen and (max-width: 350px) {
    width: 250px;
  }
  .innerText {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 7px 25px;
    margin: 0 0 11px 16px;
    border-radius: 82px;
    font-family: Pretendard_Bold;
    font-size: 18px;
    background-color: ${(props) => categoryBGColorHandler(props.pic)};
    color: ${(props) => categoryTextColorHandler(props.pic)};
  }
`;
