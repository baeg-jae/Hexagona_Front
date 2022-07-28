import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { CommentDeleteSuccess } from "redux/modules/modal";
import apis from "shared/api/main";

const deleteComment = async (payload) => {
  const deleteCommentDB = await apis.deleteComment(payload);
  return deleteCommentDB;
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comment");
      dispatch(CommentDeleteSuccess(true));
    },
    onError: () => {},
  });
};

export default useDeleteComment;
