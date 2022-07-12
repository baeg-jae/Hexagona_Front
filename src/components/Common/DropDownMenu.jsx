import { dropBoxAnimation, FlexRowDiv } from "./GlobalStyles";
import { SIGN_UP_MAX_LENGTH } from "shared/data";
import { useState, useCallback } from "react";
import useNicknameHandle from "components/Hooks/useNicknameHandle";
import SmallMenu from "assets/img/smallMenu.png";
import InputModal from "components/Common/InputModal";
import ImageModal from "./ImageModal";
import styled from "@emotion/styled";
import flex from "./flex";
import useImageHandler from "components/Hooks/useImageHandler";

const DropDownMenu = ({ text, text2, margin, click, click2 }) => {
  const [flag, setFlag] = useState(false);
  const { setNicknameFlag, nicknameFlag, setNickname, bogusCheck } =
    useNicknameHandle();
  const { setProfileFlag, profileFlag, setProfile, onSendProfile } =
    useImageHandler();

  const onClickHandler = () => {
    setFlag((value) => !value);
  };

  const SecondClickTypeHandler = () => {
    switch (click2) {
      case "nickname":
        return setNicknameFlag((value) => !value);
      default:
        return;
    }
  };

  const FirstClickTypeHandler = () => {
    switch (click) {
      case "image":
        return setProfileFlag((value) => !value);
      default:
        return;
    }
  };

  const onCancelBtnHandler = useCallback((setter) => {
    setter((value) => !value);
  }, []);

  return (
    <FlexRowDiv>
      {profileFlag ? (
        <ImageModal
          set={setProfile}
          confirm={onSendProfile}
          cancel={() => onCancelBtnHandler(setProfileFlag)}
          title="사진 변경하기"
          cancelTitle="취소"
          confirmTitle="등록하기"
        />
      ) : (
        <></>
      )}
      {nicknameFlag ? (
        <InputModal
          set={setNickname}
          confirm={bogusCheck}
          cancel={() => onCancelBtnHandler(setNicknameFlag)}
          title="닉네임 변경하기"
          cancelTitle="취소"
          confirmTitle="변경하기"
          placeholder="닉네임을 써주세요"
          count={SIGN_UP_MAX_LENGTH}
        />
      ) : (
        <></>
      )}

      <StImgDiv onClick={onClickHandler}>
        {flag ? (
          <DropRow margin={margin}>
            <span onClick={() => FirstClickTypeHandler()}>{text}</span>
            {text2 !== undefined ? (
              <>
                <div />
                <span onClick={() => SecondClickTypeHandler()}>{text2}</span>
              </>
            ) : (
              <></>
            )}
          </DropRow>
        ) : (
          <></>
        )}
      </StImgDiv>
    </FlexRowDiv>
  );
};

export default DropDownMenu;

const StImgDiv = styled.div`
  position: relative;
  width: 2.5px;
  height: 12px;
  background-image: url(${SmallMenu});
  background-size: cover;
  background-position: center;
  margin-right: 10.25px;
`;
const DropRow = styled.div`
  ${flex({ direction: "column" })}
  position: absolute;
  left: -120px;
  top: -10px;
  width: 111px;
  background: #fff;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 4px 0px;
  animation: ${dropBoxAnimation} 0.5s;
  div {
    width: 99px;
    border: 1px solid #f4f4f4;
  }
  span {
    ${flex({ direction: "column" })}
    width: 89px;
    height: 31px;
    letter-spacing: -0.02em;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5b5b5b;
  }
`;
