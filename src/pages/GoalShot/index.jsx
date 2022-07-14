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

  return (
    <>
      <StWrap>
        {isLoading ? (
          <>
            <SkeletonGoalShot />
          </>
        ) : (
          <>
            <GoalShotCards count={count} data={data} />
            <GoalShotButtons count={count} setCount={setCount} data={data} />
          </>
        )}
      </StWrap>
      <NavigatorBar />
    </>
  );
};

export default GoalShot;
