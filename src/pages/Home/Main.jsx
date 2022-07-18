import CategoryLink from "components/MainPage/CategoryLink";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const Main = () => {
  return (
    <div style={{ width: "100%" }}>
      <StFlexRowDiv className="main">
        d
        <CategoryLink url="/home/exercise" picName="one" text="운동하기" />
        <CategoryLink url="/home/study" picName="two" text="학습" />
        <CategoryLink url="/home/life" picName="three" text="생활습관" />
        <CategoryLink url="/home/hobby" picName="four" text="취미생활" />
      </StFlexRowDiv>
    </div>
  );
};

export default Main;

const StFlexRowDiv = styled.div`
  ${flex({ direction: "column" })}
  flex-wrap: wrap;
  margin-top: 28px;
`;
