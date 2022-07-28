import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const updateMission = async (payload) => {
  const updateMissionDB = await apis.updateTodo(payload);
  return updateMissionDB;
};

const useUpdateMission = () => {
  const queryClient = useQueryClient();

  return useMutation(updateMission, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      AlertComponent({
        icon: "success",
        text: "목표가 수정 되었습니다",
      });
    },
    onError: (e) => {},
  });
};

export default useUpdateMission;
