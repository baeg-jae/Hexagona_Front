import HeaderImg from "assets/img/HeaderImg.png";
import styled from "@emotion/styled";
import flex from "../Common/flex";

const CommentInput = () => {
  return (
    <StWrapFlex>
      <StProfile></StProfile>
      <StDiv>
        <input
          type="text"
          className="commentInput"
          placeholder="인증샷에 대한 감상평을 남겨주세요."
        />
        <button className="commentButton">게시</button>
      </StDiv>
    </StWrapFlex>
  );
};

export default CommentInput;

const StWrapFlex = styled.div`
  ${flex({})}
  position: fixed;
  top: calc(100% - 160px);
  width: 100%;
  height: 92px;
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${HeaderImg});
  background-position: center;
  border-radius: 100%;
`;

const StDiv = styled.div`
  ${flex({ justify: "space-around" })}
  width: 274px;
  height: 48px;
  margin-left: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  .commentInput {
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 13px;
    }
  }
  .commentButton {
    background-color: transparent;
    letter-spacing: -0.538462px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4876ef;
  }
`;
