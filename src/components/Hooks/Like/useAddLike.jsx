import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const addLike = async (payload) => {
  const addLikeDB = await apis.addLike(payload);
  return addLikeDB;
};
const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation(addLike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(QueryKeys.like);
      return data;
    },
    onError: (e) => {
      alert(e.massage);
    },
  });
};

export default useAddLike;
