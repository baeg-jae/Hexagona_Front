import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { CommentAddSuccess } from "redux/modules/modal";
import apis from "shared/api/main";

const addComment = async (payload) => {
  const addCommentDB = await apis.addComment(payload);
  return addCommentDB;
};

const useAddComment = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comment");
      dispatch(CommentAddSuccess(true));
    },
    onError: (e) => {},
  });
};

export default useAddComment;
