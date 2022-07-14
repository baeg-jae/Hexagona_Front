import { StWrap } from "components/Common/GlobalStyles";
import { useState } from "react";
import GoalShotButtons from "components/GoalShot/GoalShotButtons";
import GoalShotCards from "components/GoalShot/GoalShotCards";
import SkeletonGoalShot from "components/GoalShot/SkeletonGoalShot";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPost from "components/Hooks/useGetPost";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data, isLoading } = useGetPost();

  const [chooseOne, isChooseOne] = useState(false);
  const [chooseTwo, isChooseTwo] = useState(false);

  return (
    <>
      <StWrap>
        {isLoading ? (
          <>
            <SkeletonGoalShot />
          </>
        ) : (
          <>
            <GoalShotCards
              count={count}
              data={data}
              chooseOne={chooseOne}
              chooseTwo={chooseTwo}
              isChooseOne={isChooseOne}
              isChooseTwo={isChooseTwo}
            />
            <GoalShotButtons
              count={count}
              setCount={setCount}
              data={data}
              chooseOne={chooseOne}
              chooseTwo={chooseTwo}
              isChooseOne={isChooseOne}
              isChooseTwo={isChooseTwo}
            />
          </>
        )}
      </StWrap>
      <NavigatorBar />
    </>
  );
};

export default GoalShot;
