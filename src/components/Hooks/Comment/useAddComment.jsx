import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const addComment = async (payload) => {
  const addCommentDB = await apis.addComment(payload);
  return addCommentDB;
};

const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comment");
      AlertComponent({
        icon: "success",
        text: "댓글이 추가되었습니다",
      });
    },
    onError: (e) => {},
  });
};

export default useAddComment;
