import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";

const addTodo = async (payload) => {
  const addTodoDB = await apis.addTodo(payload);
  return addTodoDB;
};

const useAddMission = () => {
  const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("todos");
      alert("작성 완료!");
    },
    onError: () => {
      alert("작성 실패!");
    },
    onSettled: () => {},
  });
};

export default useAddMission;
