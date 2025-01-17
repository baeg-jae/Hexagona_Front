import { dropBoxAnimation, FlexRowDiv } from "./GlobalStyles";
import { SIGN_UP_MAX_LENGTH, MISSION_ADD_LENGTH } from "shared/data";
import { useRef, useCallback } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styled from "@emotion/styled";
import flex from "./flex";

import useDetectClose from "components/Hooks/useDetectClose";
import InputModal from "components/Common/InputModal";
import ImageModal from "./ImageModal";

import useNicknameHandle from "components/Hooks/User/useNicknameHandle";
import useImageHandler from "components/Hooks/useImageHandler";
import useCommentDHandle from "components/Hooks/Comment/useCommentDHandle";
import useDetailDHandle from "components/Hooks/Detail/useDetailDHandle";
import useMissionDHandle from "components/Hooks/Mission/useMissionDHandle";
import useMissionUHandle from "components/Hooks/Mission/useMissionUHandle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DropDownMenu = ({
  text,
  text2,
  text3,
  margin,
  click,
  click2,
  postId,
  commentId,
  color,
  missionId,
}) => {
  const dropDownRef = useRef(null);
  const navigate = useNavigate();
  const auth = localStorage.getItem("Authorization");
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  // 닉네임 변경
  const { setNicknameFlag, nicknameFlag, setNickname, bogusCheck } =
    useNicknameHandle();
  // 프사변경
  const { setProfileFlag, profileFlag, setProfile, onSendProfile } =
    useImageHandler();
  // 댓글 삭제
  const { onDeleteComment } = useCommentDHandle({
    postId: postId,
    commentId: commentId,
  });
  // 게시물 삭제
  const { onDeleteDetail } = useDetailDHandle({ postId: postId });
  // 목표 수정
  const {
    setMissionUFlag,
    missionUFlag,
    setMissionContent,
    bogusCheckMission,
  } = useMissionUHandle({ missionId: missionId });
  // 목표 삭제
  const { onDeleteMission } = useMissionDHandle({ missionId: missionId });

  const onClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const FirstClickTypeHandler = useCallback(() => {
    switch (click) {
      case "image":
        return setProfileFlag((value) => !value);
      case "commentD":
        return onDeleteComment();
      case "detailD":
        return onDeleteDetail();
      case "missionU":
        return setMissionUFlag((value) => !value);
      default:
        return;
    }
  }, [click, onDeleteComment, onDeleteDetail, setProfileFlag, setMissionUFlag]);

  const SecondClickTypeHandler = useCallback(() => {
    switch (click2) {
      case "nickname":
        return setNicknameFlag((value) => !value);
      case "missionD":
        return onDeleteMission();
      default:
        return;
    }
  }, [click2, setNicknameFlag, onDeleteMission]);

  const onCancelBtnHandler = useCallback((setter) => {
    setter((value) => !value);
  }, []);

  // 로그아웃
  const onLogoutHandler = useCallback(() => {
    localStorage.removeItem("Authorization");
  }, []);

  // 로그아웃 useEffect
  useEffect(() => {
    if (auth === null) {
      navigate("/login");
    }
  }, [navigate, auth]);

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
          list1="비속어 사용 불가"
          list2="7자 이하"
          isListed={true}
          cancelTitle="취소"
          confirmTitle="변경하기"
          placeholder="닉네임을 입력해주세요"
          count={SIGN_UP_MAX_LENGTH}
        />
      ) : (
        <></>
      )}
      {missionUFlag ? (
        <InputModal
          set={setMissionContent}
          confirm={bogusCheckMission}
          cancel={() => onCancelBtnHandler(setMissionUFlag)}
          title="목표 수정하기"
          cancelTitle="취소"
          confirmTitle="변경하기"
          placeholder="목표를 작성해주세요"
          count={MISSION_ADD_LENGTH}
        />
      ) : (
        <></>
      )}
      <StImgDiv onClick={onClickHandler}>
        <StDotDiv color={color} ref={dropDownRef}>
          <BiDotsVerticalRounded />
        </StDotDiv>
        {isOpen ? (
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
            {text3 !== undefined ? (
              <>
                <div />
                <span onClick={() => onLogoutHandler()}>{text3}</span>
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
  margin-right: 10.25px;
  z-index: 10;
  cursor: pointer;
`;
const StDotDiv = styled.div`
  color: ${(props) => props.color};
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
  animation: ${dropBoxAnimation} 0.3s;
  div {
    width: 99px;
    border: 1px solid var(--gray-1);
  }
  span {
    ${flex({ direction: "column" })}
    width: 89px;
    height: 31px;
    font-weight: 500;
    font-size: 14px;
    color: var(--gray-7);
  }
`;
