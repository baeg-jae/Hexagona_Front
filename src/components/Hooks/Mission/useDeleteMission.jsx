import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";

const deleteMission = async (payload) => {
  const deleteMissionDB = await apis.deleteTodo(payload);
  return deleteMissionDB;
};

const useUpdateMission = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteMission, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      Swal.fire({
        icon: "success",
        text: "미션이 삭제 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
    onError: (e) => {
      Swal.fire({
        icon: "error",
        text: "삭제 에러",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
  });
};

export default useUpdateMission;
