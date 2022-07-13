import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";

const deleteComment = async (payload) => {
  const deleteCommentDB = await apis.deleteComment(payload);
  return deleteCommentDB;
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comment");
      Swal.fire({
        icon: "success",
        text: "댓글이 삭제 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
    onError: (e) => {
      console.log(e);
      Swal.fire({
        icon: "error",
        text: "삭제 에러",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
  });
};

export default useDeleteComment;
