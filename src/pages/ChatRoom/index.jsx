import styled from "@emotion/styled";
import NavigatorBar from "components/Common/NavigatorBar";
import { StWrap } from "components/Common/GlobalStyles";
import ChatSubscribe from "components/Chat/ChatSubscribe";

const ChatRoom = () => {
  //  구독
  return (
    <StContainer>
      <ChatSubscribe />
      <NavigatorBar />
    </StContainer>
  );
};

export default ChatRoom;

const StContainer = styled(StWrap)`
  width: 100%;
  height: calc(100vh - 80px);
`;
