import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteDetail from "./useDeleteDetail";

const useDetailDHandle = ({ postId }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteDetail();

  const onDeleteDetail = useCallback(() => {
    mutate({ postId: Number(postId) });
    navigate("/feed");
  }, [mutate, postId, navigate]);

  return { onDeleteDetail };
};

export default useDetailDHandle;
