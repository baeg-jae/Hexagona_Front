import { useState, useCallback } from "react";
import { dropBoxAnimation, FlexRowDiv } from "./GlobalStyles";
import useUpdateNickname from "components/Hooks/useUpdateNickname";
import SmallMenu from "assets/img/smallMenu.png";
import Modal from "components/Common/Modal";
import styled from "@emotion/styled";
import flex from "./flex";

const DropDownMenu = ({ text, text2, margin, click }) => {
  const [flag, setFlag] = useState(false);
  const [nicknameFlag, setNicknameFlag] = useState(false);
  const [nickname, setNickname] = useState("");
  const { mutate } = useUpdateNickname();

  const onClickHandler = () => {
    setFlag((value) => !value);
  };

  const clickTypeHandler = () => {
    switch (click) {
      case "nickname":
        return setNicknameFlag((value) => !value);
      default:
        return;
    }
  };

  const onCancelBtnHandler = useCallback((setter) => {
    setter((value) => !value);
  }, []);

  const onSendNickname = (setter) => {
    setter((value) => !value);
    mutate({ nickname: nickname });
  };

  return (
    <FlexRowDiv>
      {nicknameFlag ? (
        <Modal
          set={setNickname}
          confirm={() => onSendNickname(setNicknameFlag)}
          cancel={() => onCancelBtnHandler(setNicknameFlag)}
          title="닉네임 변경하기"
          cancelTitle="취소"
          confirmTitle="변경하기"
          placeholder="닉네임을 써주세요"
        />
      ) : (
        <></>
      )}
      {flag ? (
        <DropRow margin={margin}>
          <span>{text}</span>
          {text2 !== undefined ? (
            <>
              <div />
              <span onClick={() => clickTypeHandler()}>{text2}</span>
            </>
          ) : (
            <></>
          )}
        </DropRow>
      ) : (
        <></>
      )}
      <StImgDiv onClick={onClickHandler} />
    </FlexRowDiv>
  );
};

export default DropDownMenu;

const StImgDiv = styled.div`
  width: 2.5px;
  height: 12px;
  background-image: url(${SmallMenu});
  background-size: cover;
  background-position: center;
  margin-right: 10.25px;
`;
const DropRow = styled.div`
  ${flex({ direction: "column" })}
  width: 111px;
  background: #fff;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 4px 0px;
  margin-right: 10px;
  margin-top: ${(props) => props.margin}px;
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
