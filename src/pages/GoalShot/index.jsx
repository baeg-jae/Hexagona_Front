import { StWrap } from "components/Common/GlobalStyles";
import { useState } from "react";
import GoalShotButtons from "components/GoalShot/GoalShotButtons";
import GoalShotCards from "components/GoalShot/GoalShotCards";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetGoalShot from "components/Hooks/GoalShot/useGetGoalShot";
import WebTitle from "components/Common/WebTitle";
import styled from "@emotion/styled";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

const GoalShot = () => {
  const [count, setCount] = useState(0);
  const { data, isFetching } = useGetGoalShot();
  const [chooseOne, isChooseOne] = useState(false);
  const [chooseTwo, isChooseTwo] = useState(false);
  return (
    <>
      <StDiv>
        {isFetching ? (
          <>
            <Loading />
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
              setCount={setCount}
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
