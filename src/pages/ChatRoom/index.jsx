import styled from "@emotion/styled";
import NavigatorBar from "components/Common/NavigatorBar";
import ChatInput from "components/Chat/ChatInput";
import { StWrap } from "components/Common/GlobalStyles";
import Splash1 from "assets/img/splash_01.webp";
import "./styles.css";

const ChatRoom = () => {
  const temp = "you";
  return (
    <StContainer>
      {temp === "other" ? <StProfile /> : <></>}
      {temp === "you" ? <StProfile /> : <></>}
      <ChatInput />
      <NavigatorBar />
    </StContainer>
  );
};

export default ChatRoom;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Splash1});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;

const StContainer = styled(StWrap)`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: red;
`;
