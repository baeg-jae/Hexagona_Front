import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";

const addComment = async (payload) => {
  const addCommentDB = await apis.addComment(payload);
  return addCommentDB;
};

const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation(addComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("comment");
      Swal.fire({
        icon: "success",
        text: "댓글이 추가되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
      console.log(data);
    },
    onError: (e) => {
      alert(e);
    },
  });
};

export default useAddComment;
