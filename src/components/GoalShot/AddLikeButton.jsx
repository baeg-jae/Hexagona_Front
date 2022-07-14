import { StButton, StImageDiv } from "./GoalShotButtonStyle";
import useAddLike from "components/Hooks/Like/useAddLike";
const AddLikeButton = ({
  data,
  count,
  isChooseTwo,
  chooseTwo,
  disableHandler,
}) => {
  const { mutate } = useAddLike();

  const addLike = () => {
    mutate({
      postId: data[count]?.postId,
    });
  };

  const onLike = () => {
    if (count < data?.length - 1) {
      isChooseTwo(true);
      addLike();
    } else {
      return;
    }
  };

  return (
    <StButton onClick={onLike} red flag={chooseTwo} disabled={disableHandler()}>
      <StImageDiv heart />
    </StButton>
  );
};

export default AddLikeButton;
