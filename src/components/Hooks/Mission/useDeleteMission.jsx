import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import { useDispatch } from "react-redux";
import { MissionDeleteModalSuccess } from "redux/modules/modal";

const deleteMission = async (payload) => {
  const deleteMissionDB = await apis.deleteTodo(payload);
  return deleteMissionDB;
};

const useUpdateMission = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation(deleteMission, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      dispatch(MissionDeleteModalSuccess(true));
    },
    onError: () => {},
  });
};

export default useUpdateMission;
