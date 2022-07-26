import { FlexRowDiv } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { SkeletonAnim } from "components/Common/GlobalStyles";
import useGetGoalShot from "components/Hooks/GoalShot/useGetGoalShot";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

const SkeletonCard = () => {
  const { data } = useGetGoalShot;
  return (
    <>
      <StCardContainer>
        {data === undefined ? (
          <Loading />
        ) : (
          <>
            <StCard differ />
            <StCard />
            <StCard differ />
          </>
        )}
      </StCardContainer>
      {data === undefined ? (
        <></>
      ) : (
        <>
          <FlexRowDiv style={{ gap: "16px" }}>
            <StButton />
            <StButton />
          </FlexRowDiv>
        </>
      )}
    </>
  );
};

export default SkeletonCard;

const StCardContainer = styled.div`
  ${flex({ gap: "10px", align: "flex-start" })}
  width: 100%;
  height: 537px;
`;

const StCard = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-end",
    align: "flex-start",
  })}
  min-width: 285px;
  height: 480px;
  background-color: var(--skeleton);
  border-radius: 20px;
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;

const StButton = styled.button`
  ${flex({})}
  width: 95.38px;
  height: 95.38px;
  margin-top: 63px;
  border: 1px solid var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
  border-radius: 48.0529px;
`;
