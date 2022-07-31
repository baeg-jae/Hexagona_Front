import FeedContainer from "components/Feed/FeedContainer";
import NavigatorBar from "components/Common/NavigatorBar";
import WebTitle from "components/Common/WebTitle";
import { StWrap } from "components/Common/GlobalStyles";
import styled from "@emotion/styled";

const Feed = () => {
  return (
    <StCalculatedWrap>
      <WebTitle text="피드: 갓생메이커" />
      <FeedContainer />
      <NavigatorBar />
    </StCalculatedWrap>
  );
};

export default Feed;

const StCalculatedWrap = styled(StWrap)`
  position: relative;
  height: 100vh;
`;
