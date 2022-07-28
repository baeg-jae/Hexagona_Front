import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import { useDispatch } from "react-redux";
import {
  UserProfileModalDupError,
  UserProfileModalSuccess,
} from "redux/modules/modal";

const addComment = async (payload) => {
  const updateNickname = await apis.updateUserNickname(payload);
  return updateNickname;
};

const useUpdateNickname = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation(addComment, {
    onMutate: async (data) => {
      await queryClient.cancelQueries("user");
      queryClient.setQueryData("user", (oldData) => {
        oldData.nickname = data.nickname;
        return oldData;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      dispatch(UserProfileModalSuccess(true));
    },
    onError: () => {
      dispatch(UserProfileModalDupError(true));
    },
  });
};

export default useUpdateNickname;
