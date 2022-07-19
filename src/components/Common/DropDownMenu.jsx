import { dropBoxAnimation, FlexRowDiv } from "./GlobalStyles";
import { SIGN_UP_MAX_LENGTH } from "shared/data";
import { useRef, useCallback } from "react";
import useNicknameHandle from "components/Hooks/User/useNicknameHandle";
import useImageHandler from "components/Hooks/useImageHandler";
import useCommentDHandle from "components/Hooks/Comment/useCommentDHandle";
import useDetailDHandle from "components/Hooks/Detail/useDetailDHandle";
import InputModal from "components/Common/InputModal";
import ImageModal from "./ImageModal";
import styled from "@emotion/styled";
import flex from "./flex";
import useDetectClose from "components/Hooks/useDetectClose";
import { BiDotsVerticalRounded } from "react-icons/bi";
import useMissionDHandle from "components/Hooks/Mission/useMissionDHandle";

const DropDownMenu = ({
  text,
  text2,
  margin,
  click,
  click2,
  postId,
  commentId,
  color,
  missionId,
}) => {
  const dropDownRef = useRef(null);
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

  // 미션 수정

  // 미션 삭제
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
        return;
      default:
        return;
    }
  }, [click, onDeleteComment, onDeleteDetail, setProfileFlag]);

  const SecondClickTypeHandler = useCallback(() => {
    switch (click2) {
      case "nickname":
        return setNicknameFlag((value) => !value);
      case "missionD":
        return onDeleteMission();
      default:
        return;
    }
  }, [click2, setNicknameFlag]);

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
    border: 1px solid #f4f4f4;
  }
  span {
    ${flex({ direction: "column" })}
    width: 89px;
    height: 31px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5b5b5b;
  }
`;
