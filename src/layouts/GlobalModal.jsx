import { useSelector } from "react-redux";
import AlertModal from "components/Common/AlertModal";

const GlobalModal = () => {
  const {
    MissionError,
    MissionSuccess,
    UserChange,
    UserChangeDupError,
    MissionEditSuccess,
    MissionDeleteSuccess,
    MissionPhotoSuccess,
    CommentAddSuccess,
    CommentAddError,
    CommentDeleteSuccess,
    PostDeleteSuccess,
    ChatJoinAlert,
    SignUpSuccess,
    SignUpDup,
    ChatJoinError,
  } = useSelector((state) => state.modalReducer);
  return (
    <>
      {/* 목표 관련 모달 */}
      {MissionError && (
        <AlertModal
          title="조건을 충족해주세요."
          icon="cancel"
          type="missionAddError"
        />
      )}
      {MissionSuccess && (
        <AlertModal
          title="목표가 등록되었습니다."
          icon="confirm"
          type="missionAddSuccess"
        />
      )}
      {MissionEditSuccess && (
        <AlertModal
          title="목표가 수정되었습니다."
          icon="confirm"
          type="missionEditSuccess"
        />
      )}
      {MissionDeleteSuccess && (
        <AlertModal
          title="목표가 삭제되었습니다."
          icon="confirm"
          type="missionDeleteSuccess"
        />
      )}
      {MissionPhotoSuccess && (
        <AlertModal
          title="목표가 인증되었습니다."
          icon="confirm"
          type="missionPhotoSuccess"
        />
      )}
      {/* 유저 정보 수정 관련 모달 */}
      {UserChangeDupError && (
        <AlertModal
          title="중복된 닉네임입니다."
          icon="cancel"
          type="userProfileDupError"
        />
      )}
      {UserChange && (
        <AlertModal
          title="닉네임이 변경되었습니다."
          icon="confirm"
          type="userProfileSuccess"
        />
      )}
      {/* 댓글 & 게시글 관련 모달 */}
      {CommentAddSuccess && (
        <AlertModal
          title="댓글이 등록되었습니다."
          icon="confirm"
          type="commentAddSuccess"
        />
      )}
      {CommentAddError && (
        <AlertModal
          title="공백 및 비속어는 사용할 수 없습니다."
          icon="cancel"
          type="CommentAddError"
        />
      )}
      {CommentDeleteSuccess && (
        <AlertModal
          title="댓글이 삭제되었습니다."
          icon="confirm"
          type="commentDeleteSuccess"
        />
      )}
      {PostDeleteSuccess && (
        <AlertModal
          title="게시글이 삭제되었습니다."
          icon="confirm"
          type="postDeleteSuccess"
        />
      )}
      {/* 채팅 관련 모달 */}
      {ChatJoinAlert && (
        <AlertModal
          title="채팅방에 입장합니다."
          icon="confirm"
          type="chatJoinAlert"
        />
      )}
      {ChatJoinError && (
        <AlertModal
          title="나 자신과는 대화할 수 없습니다."
          icon="cancel"
          type="chatJoinError"
        />
      )}
      {/* 회원가입 관련 모달 */}
      {SignUpSuccess && (
        <AlertModal
          title="가입되었습니다."
          icon="confirm"
          type="signUpSuccess"
        />
      )}
      {SignUpDup && (
        <AlertModal
          title="중복된 아이디입니다."
          icon="cancel"
          type="signUpDup"
        />
      )}
    </>
  );
};
export default GlobalModal;
