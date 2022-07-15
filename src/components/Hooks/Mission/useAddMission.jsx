import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";

const addTodo = async (payload) => {
  const addTodoDB = await apis.addTodo(payload);
  return addTodoDB;
};

const useAddMission = () => {
  const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useAddMission;
