import { StButton, StImageDiv } from "./GoalShotButtonStyle";
import useAddLike from "components/Hooks/Like/useAddLike";
import { useCallback } from "react";
const AddLikeButton = ({
  data,
  count,
  isChooseTwo,
  chooseTwo,
  disableHandler,
}) => {
  const { mutate } = useAddLike();

  const addLike = useCallback(() => {
    mutate({
      postId: data[count]?.postId,
    });
  }, [count, data, mutate]);

  const onLike = useCallback(() => {
    if (count < data?.length) {
      isChooseTwo(true);
      addLike();
    } else {
      return;
    }
  }, [addLike, count, data?.length, isChooseTwo]);

  return (
    <StButton onClick={onLike} red flag={chooseTwo} disabled={disableHandler()}>
      <StImageDiv heart />
    </StButton>
  );
};

export default AddLikeButton;
