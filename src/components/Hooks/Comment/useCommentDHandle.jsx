import { useCallback } from "react";
import useDeleteComment from "./useDeleteComment";

const useCommentDHandle = ({ commentId, postId }) => {
  const { mutate } = useDeleteComment();

  const onDelete = useCallback(() => {
    mutate({ commentId: commentId, postId: Number(postId) });
  }, [mutate, commentId, postId]);

  return { onDelete };
};

export default useCommentDHandle;
