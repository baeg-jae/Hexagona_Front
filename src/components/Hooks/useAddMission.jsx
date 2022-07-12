import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";

const addTodo = async (payload) => {
  const addTodoDB = await apis.addTodo(payload);
  return addTodoDB;
};

const useAddMission = () => {
  const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
      Swal.fire({
        icon: "success",
        title: "미션이 추가되었습니다",
        text: "미션을 수행해보세요",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
      console.log(data);
    },
  });
};

export default useAddMission;
