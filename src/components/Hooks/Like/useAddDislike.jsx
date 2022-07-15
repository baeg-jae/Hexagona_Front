import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";

const addDislike = async (payload) => {
  const addDislikeDB = await apis.addDislike(payload);
  return addDislikeDB;
};
const useAddDislike = () => {
  const queryClient = useQueryClient();

  return useMutation(addDislike, {
    onSuccess: () => {
      queryClient.invalidateQueries("dislike");
    },
    onError: (e) => {},
  });
};

export default useAddDislike;
