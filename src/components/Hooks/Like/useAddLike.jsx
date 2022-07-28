import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";

const addLike = async (payload) => {
  const addLikeDB = await apis.addLike(payload);
  return addLikeDB;
};
const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation(addLike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("like");
      return data;
    },
    onError: () => {},
  });
};

export default useAddLike;
