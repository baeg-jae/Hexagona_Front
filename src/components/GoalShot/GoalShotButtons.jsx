import { FlexRowDiv } from "components/Common/GlobalStyles";
import { useEffect } from "react";
import AddDislikeButton from "./AddDislikeButton";
import AddLikeButton from "./AddLikeButton";

const GoalShotButtons = ({
  count,
  setCount,
  data,
  chooseOne,
  chooseTwo,
  isChooseOne,
  isChooseTwo,
}) => {
  const disableHandler = () => {
    if (chooseOne || chooseTwo) return true;
    return false;
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (chooseOne) {
        isChooseOne(false);
        setCount((value) => value + 1);
      } else if (chooseTwo) {
        isChooseTwo(false);
        setCount((value) => value + 1);
      }
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [chooseOne, chooseTwo, setCount, isChooseOne, isChooseTwo]);

  return (
    <FlexRowDiv style={{ gap: "16px" }}>
      <AddDislikeButton
        data={data}
        count={count}
        isChooseOne={isChooseOne}
        chooseOne={chooseOne}
        disableHandler={disableHandler}
      />
      <AddLikeButton
        data={data}
        count={count}
        isChooseTwo={isChooseTwo}
        chooseTwo={chooseTwo}
        disableHandler={disableHandler}
      />
    </FlexRowDiv>
  );
};

export default GoalShotButtons;
