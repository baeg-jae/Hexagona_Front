import { useState, useCallback } from "react";
import { badWords } from "shared/TextsData";
import AlertComponent from "components/Common/AlertComponent";
import useUpdateMission from "./useUpdateMission";

const useMissionUHandle = ({ missionId }) => {
  const [missionUFlag, setMissionUFlag] = useState(false);
  const [missionContent, setMissionContent] = useState("");
  const { mutate } = useUpdateMission();

  const onSendUpdatedMission = useCallback(() => {
    if (missionContent !== "") {
      setMissionUFlag((value) => !value);
      mutate({ missionContent: missionContent, missionId: missionId });
    } else {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 미션을 입력해주세요",
      });
    }
  }, [mutate, missionContent, missionId]);

  const bogusCheckMission = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      missionContent.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 미션을 입력해주세요",
      });
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
