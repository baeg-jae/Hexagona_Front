import { StButton, StImageDiv } from "./GoalShotButtonStyle";
import useAddDislike from "components/Hooks/Like/useAddDislike";
import { useCallback } from "react";

const AddDislikeButton = ({
  data,
  count,
  isChooseOne,
  chooseOne,
  disableHandler,
}) => {
  const { mutate } = useAddDislike();

  const addDisLike = useCallback(() => {
    mutate({
      postId: data[count]?.postId,
    });
  }, [count, data, mutate]);

  const onDisLike = useCallback(() => {
    if (count < data?.length) {
      isChooseOne(true);
      addDisLike();
    } else {
      return;
    }
  }, [addDisLike, count, data?.length, isChooseOne]);

  return (
    <StButton onClick={onDisLike} flag={chooseOne} disabled={disableHandler()}>
      <StImageDiv />
    </StButton>
  );
};

export default AddDislikeButton;
