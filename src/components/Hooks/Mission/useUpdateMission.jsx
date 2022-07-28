import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import { useDispatch } from "react-redux";
import { MissionEditModalSuccess } from "redux/modules/modal";

const updateMission = async (payload) => {
  const updateMissionDB = await apis.updateTodo(payload);
  return updateMissionDB;
};

const useUpdateMission = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation(updateMission, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      dispatch(MissionEditModalSuccess(true));
    },
    onError: () => {},
  });
};

export default useUpdateMission;
