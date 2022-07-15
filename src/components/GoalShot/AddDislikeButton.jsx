import { StButton, StImageDiv } from "./GoalShotButtonStyle";
import useAddDislike from "components/Hooks/Like/useAddDislike";

const AddDislikeButton = ({
  data,
  count,
  isChooseOne,
  chooseOne,
  disableHandler,
}) => {
  const { mutate } = useAddDislike();

  const addDisLike = () => {
    mutate({
      postId: data[count]?.postId,
    });
  };

  const onDisLike = () => {
    if (count < data?.length) {
      isChooseOne(true);
      addDisLike();
    } else {
      return;
    }
  };
  return (
    <StButton onClick={onDisLike} flag={chooseOne} disabled={disableHandler()}>
      <StImageDiv />
    </StButton>
  );
};

export default AddDislikeButton;
