import styled from "@emotion/styled";
import NavigatorBar from "components/Common/NavigatorBar";
import { StWrap } from "components/Common/GlobalStyles";

const ChatRoom = () => {
  return (
    <StContainer>
      <NavigatorBar />
    </StContainer>
  );
};

export default ChatRoom;

const StContainer = styled(StWrap)`
  width: 100%;
  height: calc(100vh - 80px);
`;
