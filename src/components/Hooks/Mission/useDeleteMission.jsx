import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const deleteMission = async (payload) => {
  const deleteMissionDB = await apis.deleteTodo(payload);
  return deleteMissionDB;
};

const useUpdateMission = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteMission, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      AlertComponent({
        icon: "success",
        text: "목표가 삭제 되었습니다",
      });
    },
    onError: (e) => {},
  });
};

export default useUpdateMission;
