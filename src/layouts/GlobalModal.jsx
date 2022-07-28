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
    </>
  );
};

export default GlobalModal;
