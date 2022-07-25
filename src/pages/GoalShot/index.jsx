import { StWrap } from "components/Common/GlobalStyles";
import { useState } from "react";
import GoalShotButtons from "components/GoalShot/GoalShotButtons";
import GoalShotCards from "components/GoalShot/GoalShotCards";
import SkeletonGoalShot from "components/Skeletons/SkeletonGoalShot";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetGoalShot from "components/Hooks/GoalShot/useGetGoalShot";
import WebTitle from "components/Common/WebTitle";
import styled from "@emotion/styled";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data, isFetching } = useGetGoalShot();
  const [chooseOne, isChooseOne] = useState(false);
  const [chooseTwo, isChooseTwo] = useState(false);
  return (
    <>
      <StDiv>
        {isFetching ? (
          <>
            <SkeletonGoalShot />
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
      </StDiv>
      <NavigatorBar />
    </>
  );
};

export default GoalShot;

const StDiv = styled(StWrap)`
  overflow-y: scroll;
  overflow-x: hidden;
`;
