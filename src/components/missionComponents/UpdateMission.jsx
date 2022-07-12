import { MISSION_ADD_LENGTH } from "shared/data";
import { useState, useCallback } from "react";
import useUpdateMission from "components/Hooks/useUpdateMission";
import InputModal from "components/Common/InputModal";
import modify from "assets/img/modify.png";
import styled from "@emotion/styled";

const UpdateMission = ({ missionId }) => {
  const [missionContent, setMissionContent] = useState("");
  const [flag, setFlag] = useState(false);
  const { mutate } = useUpdateMission();
  const onClickHandler = () => {
    setFlag((value) => !value);
  };
  const onCancelBtnHandler = useCallback((setter) => {
    setter((value) => !value);
  }, []);

  const onUpdateHandler = useCallback(() => {
    mutate({ missionId: missionId, missionContent: missionContent });
  }, [missionId, missionContent, mutate]);
  return (
    <>
      {flag ? (
        <InputModal
          set={setMissionContent}
          confirm={onUpdateHandler}
          cancel={() => onCancelBtnHandler(setFlag)}
          title="미션 수정하기"
          cancelTitle="취소"
          confirmTitle="수정하기"
          placeholder="새 미션을 적어주세요"
          count={MISSION_ADD_LENGTH}
        />
      ) : (
        <StDiv onClick={onClickHandler} img={modify}></StDiv>
      )}
    </>
  );
};

export default UpdateMission;

const StDiv = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
