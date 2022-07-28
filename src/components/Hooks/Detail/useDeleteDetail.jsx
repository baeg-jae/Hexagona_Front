import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { PostDeleteSuccess } from "redux/modules/modal";
import apis from "shared/api/main";

const deleteDetail = async (payload) => {
  const deleteDetailDB = await apis.deletePost(payload);
  return deleteDetailDB;
};

const useDeleteDetail = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(deleteDetail, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      dispatch(PostDeleteSuccess(true));
    },
    onError: () => {},
  });
};

export default useDeleteDetail;
