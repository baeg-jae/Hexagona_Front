import styled from "@emotion/styled";
import flex from "../Common/flex";
import HeaderImg from "assets/img/HeaderImg.png";
import useCategory from "components/Hooks/useCategory";

const CommentImg = ({ category, postContent, img }) => {
  const getCategory = useCategory({ category });
  return (
    <StWrapFlex img={img}>
      <div className="gradient">
        <HeaderDiv>
          <StProfile />
          <StTextDiv>
            <span className="titleText">갓생 입문자</span>
            <span className="nameText">나중에 바꿀거</span>
          </StTextDiv>
        </HeaderDiv>
        <BottomDiv>
          <span className="titleText">{getCategory}</span>
          <span className="nameText">{postContent}</span>
        </BottomDiv>
      </div>
    </StWrapFlex>
  );
};

export default CommentImg;

const StWrapFlex = styled.div`
  ${flex({
    direction: "column",
    justify: "space-between",
  })}
  width: 325px;
  height: 440px;
  margin-top: 59px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  .gradient {
    ${flex({ direction: "column", align: "flex-start", justify: "flex-end" })}
    width: 100%;
    height: 440px;
    border-radius: 20px;
    background: linear-gradient(
      0.14deg,
      #000000 0.09%,
      rgba(0, 0, 0, 0) 32.15%
    );
  }
`;

const HeaderDiv = styled.div`
  ${flex({ justify: "flex-start", align: "flex-start" })}
  width: 100%;
  height: 100%;
  margin: 20px 0 0 20px;
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${HeaderImg});
  background-position: center;
  border-radius: 100%;
`;

const StTextDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  letter-spacing: -0.02em;
  line-height: 130%;
  margin-left: 8px;
  color: #212121;
  .titleText {
    font-weight: 400;
    font-size: 13px;
  }
  .nameText {
    font-weight: 700;
    font-size: 15px;
  }
`;

const BottomDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  letter-spacing: -0.02em;
  margin: 0 0 20px 20px;
  color: var(--white);
  .titleText {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .nameText {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
`;
