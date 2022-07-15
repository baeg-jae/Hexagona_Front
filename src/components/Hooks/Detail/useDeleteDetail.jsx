import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const deleteDetail = async (payload) => {
  const deleteDetailDB = await apis.deletePost(payload);
  return deleteDetailDB;
};

const useDeleteDetail = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDetail, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      AlertComponent({
        icon: "success",
        text: "게시글이 삭제 되었습니다",
      });
    },
    onError: (e) => {},
  });
};

export default useDeleteDetail;
