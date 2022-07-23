import CategoryLink from "components/MainPage/CategoryLink";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import JoyrideContainer from "components/Tutorial/JoyrideContainer";
import { mainSteps } from "shared/tutorialData";

const Main = () => {
  const [isShowTutorial, setIsShowTutorial] = useState(false);

  const tutorial = localStorage.getItem("tutorial-main");

  useEffect(() => {
    if (tutorial === null) {
      setIsShowTutorial(true);
      localStorage.setItem("tutorial-main", false);
    }
  }, [tutorial]);

  return (
    <div style={{ width: "100%" }}>
      <StFlexRowDiv className="main">
        <div className="main_one">
          <div className="main_two">
            <CategoryLink url="/home/exercise " picName="one" text="운동하기" />
          </div>
          <CategoryLink url="/home/study" picName="two" text="학습" />
          <CategoryLink url="/home/life" picName="three" text="생활습관" />
          <CategoryLink url="/home/hobby" picName="four" text="취미생활" />
        </div>
        <JoyrideContainer
          run={isShowTutorial}
          setRun={setIsShowTutorial}
          steps={mainSteps}
        />
      </StFlexRowDiv>
    </div>
  );
};

export default Main;

const StFlexRowDiv = styled.div`
  ${flex({ direction: "column" })}
  position: relative;
  flex-wrap: wrap;
  margin-top: 28px;
`;
