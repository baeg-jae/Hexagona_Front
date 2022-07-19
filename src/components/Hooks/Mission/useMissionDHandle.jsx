import { useCallback } from "react";
import useDeleteMission from "./useDeleteMission";

const useMissionDHandle = ({ missionId }) => {
  const { mutate } = useDeleteMission();

  const onDeleteMission = useCallback(() => {
    mutate({ missionId: missionId });
  }, [mutate, missionId]);

  return { onDeleteMission };
};

export default useMissionDHandle;
