import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";

const updateMission = async (payload) => {
  const updateMissionDB = await apis.updateTodo(payload);
  return updateMissionDB;
};

const useUpdateMission = () => {
  const queryClient = useQueryClient();

  return useMutation(updateMission, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      Swal.fire({
        icon: "success",
        text: "미션이 수정 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
    onError: (e) => {
      Swal.fire({
        icon: "error",
        text: "수정 에러",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
  });
};

export default useUpdateMission;
