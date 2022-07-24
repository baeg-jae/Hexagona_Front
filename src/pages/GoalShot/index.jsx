import { StWrap } from "components/Common/GlobalStyles";
import { useState } from "react";
import GoalShotButtons from "components/GoalShot/GoalShotButtons";
import GoalShotCards from "components/GoalShot/GoalShotCards";
import SkeletonGoalShot from "components/Skeletons/SkeletonGoalShot";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetGoalShot from "components/Hooks/GoalShot/useGetGoalShot";
import WebTitle from "components/Common/WebTitle";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data, isFetching } = useGetGoalShot();
  const [chooseOne, isChooseOne] = useState(false);
  const [chooseTwo, isChooseTwo] = useState(false);
  return (
    <>
      <StWrap className="main">
        {isFetching ? (
          <>
            <SkeletonGoalShot data={data} />
          </>
        ) : (
          <>
            <WebTitle text="인증샷: 갓생메이커" />
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
