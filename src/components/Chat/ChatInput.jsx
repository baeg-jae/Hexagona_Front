import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Splash1 from "assets/img/splash_01.webp";
import { MOBILE_SIZE_WIDTH } from "shared/data";

const ChatInput = () => {
  return (
    <StWrap>
      <StWrapFlex>
        <StProfile profile_img={Splash1} />
        <StDiv>
          <input
            type="text"
            className="commentInput"
            placeholder="인증샷에 대한 감상평을 남겨주세요."
            onChange=""
          />
          <button className="commentButton">게시</button>
        </StDiv>
      </StWrapFlex>
    </StWrap>
  );
};

export default ChatInput;

const StWrap = styled.div`
  ${flex({})}
`;

const StWrapFlex = styled.div`
  ${flex({})}
  position: fixed;
  bottom: calc(100% - 770px);
  width: ${MOBILE_SIZE_WIDTH};
  height: 50px;
  background-color: var(--white);
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.profile_img});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;

const StDiv = styled.div`
  ${flex({ justify: "space-around" })}
  width: 287px;
  height: 40px;
  margin-left: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  .commentInput {
    border: none;
    background-color: transparent;
    white-space: normal;
    text-align: justify;
    margin-left: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 11px;
    }
  }
  .commentButton {
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4876ef;
    margin-right: 15px;
  }
`;
