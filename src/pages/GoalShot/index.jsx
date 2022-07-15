import { StWrap } from "components/Common/GlobalStyles";
import { GOALSHOT_RANDOM_CARD } from "shared/data";
import { useEffect, useState } from "react";
import GoalShotButtons from "components/GoalShot/GoalShotButtons";
import GoalShotCards from "components/GoalShot/GoalShotCards";
import SkeletonGoalShot from "components/GoalShot/SkeletonGoalShot";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetGoalShot from "components/Hooks/GoalShot/useGetGoalShot";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data, isFetching } = useGetGoalShot();
  const [container, setContainer] = useState([]);
  const [chooseOne, isChooseOne] = useState(false);
  const [chooseTwo, isChooseTwo] = useState(false);

  const shuffleArray = (array) => {
    for (let i = 0; i < array?.length; i++) {
      let random = Math.floor(Math.random() * (i + 1));
      [array[i], array[random]] = [array[random], array[i]];
    }
    return array;
  };

  console.log(data?.length);
  useEffect(() => {
    setContainer(shuffleArray(data));
  }, [data]);

  return (
    <>
      <StWrap>
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
