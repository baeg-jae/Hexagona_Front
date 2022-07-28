import { useState, useCallback } from "react";
import { badWords } from "shared/TextsData";
import AlertComponent from "components/Common/AlertComponent";
import useUpdateMission from "./useUpdateMission";
import { useDispatch } from "react-redux";
import { MissionAddModalError } from "redux/modules/modal";

const useMissionUHandle = ({ missionId }) => {
  const [missionUFlag, setMissionUFlag] = useState(false);
  const [missionContent, setMissionContent] = useState("");
  const { mutate } = useUpdateMission();
  const dispatch = useDispatch();

  const onSendUpdatedMission = useCallback(() => {
    if (missionContent !== "") {
      setMissionUFlag((value) => !value);
      mutate({ missionContent: missionContent, missionId: missionId });
    } else {
      dispatch(MissionAddModalError(true));
    }
  }, [mutate, missionContent, missionId]);

  const bogusCheckMission = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      missionContent.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      dispatch(MissionAddModalError(true));
    } else {
      onSendUpdatedMission();
    }
  }, [missionContent, onSendUpdatedMission]);

  return {
    setMissionUFlag,
    missionUFlag,
    setMissionContent,
    bogusCheckMission,
  };
};

export default useMissionUHandle;
