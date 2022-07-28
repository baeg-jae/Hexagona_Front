import { useSelector } from "react-redux";
import AlertModal from "components/Common/AlertModal";

const GlobalModal = () => {
  const {
    MissionError,
    MissionSuccess,
    UserChange,
    UserChangeError,
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
    SignUpError,
    SignUpDup,
  } = useSelector((state) => state.modalReducer);
  return (
    <>
      {/* 목표 관련 모달 */}
      {MissionError && (
        <AlertModal
          title="제대로 된 목표를 입력해 주세요."
          icon="cancel"
          type="missionAddError"
        />
      )}
      {MissionSuccess && (
        <AlertModal
          title="목표 추가에 성공하였습니다."
          icon="confirm"
          type="missionAddSuccess"
        />
      )}
      {MissionEditSuccess && (
        <AlertModal
          title="목표 수정에 성공하였습니다."
          icon="confirm"
          type="missionEditSuccess"
        />
      )}
      {MissionDeleteSuccess && (
        <AlertModal
          title="목표 삭제에 성공하였습니다."
          icon="confirm"
          type="missionDeleteSuccess"
        />
      )}
      {MissionPhotoSuccess && (
        <AlertModal
          title="목표 인증에 성공하였습니다."
          icon="confirm"
          type="missionPhotoSuccess"
        />
      )}
      {/* 유저 정보 수정 관련 모달 */}
      {UserChangeError && (
        <AlertModal
          title="제대로 된 정보를 입력해 주세요."
          icon="cancel"
          type="userProfileError"
        />
      )}
      {UserChangeDupError && (
        <AlertModal
          title="닉네임이 중복 되었습니다."
          icon="cancel"
          type="userProfileDupError"
        />
      )}
      {UserChange && (
        <AlertModal
          title="변경에 성공 하였습니다."
          icon="confirm"
          type="userProfileSuccess"
        />
      )}
      {/* 댓글 & 게시글 관련 모달 */}
      {CommentAddSuccess && (
        <AlertModal
          title="댓글 추가에 성공 하였습니다."
          icon="confirm"
          type="commentAddSuccess"
        />
      )}
      {CommentAddError && (
        <AlertModal
          title="제대로된 댓글을 달아주세요."
          icon="cancel"
          type="CommentAddError"
        />
      )}
      {CommentDeleteSuccess && (
        <AlertModal
          title="댓글 삭제에 성공 하였습니다."
          icon="confirm"
          type="commentDeleteSuccess"
        />
      )}
      {PostDeleteSuccess && (
        <AlertModal
          title="게시글 삭제에 성공 하였습니다."
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
      {/* 회원가입 관련 모달 */}
      {SignUpSuccess && (
        <AlertModal
          title="회원가입에 성공하셨습니다."
          icon="confirm"
          type="signUpSuccess"
        />
      )}
      {SignUpError && (
        <AlertModal
          title="제대로 된 닉네임을 적어주세요."
          icon="cancel"
          type="signUpError"
        />
      )}
      {SignUpDup && (
        <AlertModal
          title="중복 된 아이디 입니다."
          icon="cancel"
          type="signUpDup"
        />
      )}
    </>
  );
};
export default GlobalModal;
