import { useCallback } from "react";
import useDeleteDetail from "./useDeleteDetail";

const useDetailDHandle = ({ postId }) => {
  const { mutate } = useDeleteDetail();

  const onDeleteDetail = useCallback(() => {
    mutate({ postId: Number(postId) });
    window.location.replace("/feed");
  }, [mutate, postId]);

  return { onDeleteDetail };
};

export default useDetailDHandle;
