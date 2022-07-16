import { StWrap } from "components/Common/GlobalStyles";
import { GOALSHOT_RANDOM_CARD } from "shared/data";
import { useEffect, useState } from "react";
import GoalShotButtons from "components/GoalShot/GoalShotButtons";
import GoalShotCards from "components/GoalShot/GoalShotCards";
import SkeletonGoalShot from "components/GoalShot/SkeletonGoalShot";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetGoalShot from "components/Hooks/GoalShot/useGetGoalShot";
import { shuffleArray } from "shared/shuffleArray";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data, isFetching } = useGetGoalShot();
  const [container, setContainer] = useState([]);
  const [chooseOne, isChooseOne] = useState(false);
  const [chooseTwo, isChooseTwo] = useState(false);

  useEffect(() => {
    setContainer(shuffleArray(data));
  }, [data]);

  return (
    <>
      <StWrap className="main">
        {isFetching ? (
          <>
            <SkeletonGoalShot />
          </>
        ) : (
          <>
            <GoalShotCards
              count={count}
              data={container?.slice(0, GOALSHOT_RANDOM_CARD)}
              chooseOne={chooseOne}
              chooseTwo={chooseTwo}
              isChooseOne={isChooseOne}
              isChooseTwo={isChooseTwo}
            />
            <GoalShotButtons
              count={count}
              setCount={setCount}
              data={container?.slice(0, GOALSHOT_RANDOM_CARD)}
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
