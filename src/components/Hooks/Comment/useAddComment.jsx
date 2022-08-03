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
    onSuccess: (data) => {
      queryClient.invalidateQueries("comment");
      console.log(data);
      dispatch(CommentAddSuccess(true));
    },
    onError: () => {},
  });
};

export default useAddComment;
