import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const deleteComment = async (payload) => {
  const deleteCommentDB = await apis.deleteComment(payload);
  return deleteCommentDB;
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comment");
      AlertComponent({
        icon: "success",
        text: "댓글이 삭제 되었습니다",
      });
    },
    onError: () => {},
  });
};

export default useDeleteComment;
