import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGetChatSetting from "components/Hooks/ChatList/useGetChatSetting";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import BackButton from "components/Common/BackButton";
import StChatContainer from "./StChatContainer";
import { FlexColumnDiv } from "components/Common/GlobalStyles";
import { useRef } from "react";
import { addChat } from "redux/modules/chat";

const ChatSubscribe = () => {
  const { chatRoomId } = useParams();
  const SockJs = new SockJS(`${process.env.REACT_APP_SERVER}/ws-stomp`);
  const StompClient = Stomp.over(SockJs);
  const { userId } = useSelector((state) => state.userReducer);
  const [messageData, setMessage] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.chatReducer);

  // 지금 쓰는 채팅 가져오기
  const addMessage = (e) => {
    setMessage(e.target.value);
  };

  // 이전 채팅 메시지 가져오는 query
  const { data } = useGetChatSetting({
    userId: userId,
    chatRoomId: chatRoomId,
  });

  const wsSubscribe = useCallback(() => {
    StompClient.connect(
      {},
      () => {
        StompClient.subscribe(`/sub/chat/room/${chatRoomId}`, (message) => {
          const data = JSON.parse(message.body);
          // 리덕스에 채팅 메시지 배열 보내는곳
          dispatch(addChat(data));
        });
      },
      (e) => {
        console.log(e);
      }
    );
  }, [StompClient, chatRoomId, dispatch]);

  // 0. stomp에 waitforConnect 추가 -> 자동으로 재연결 해주는친구
  // disconnect 할때, 구독한것도 취소해줘야하고, 자동연결도 cleanup 해줘야한다.
  console.log(StompClient.ws.readyState);
  const waitForConnect = useCallback(
    (ws, callback) => {
      setTimeout(() => {
        if (StompClient.ws.readyState === 1) {
          callback();
        } else {
          waitForConnect(ws, callback);
        }
      }, 100);
    },
    [StompClient.ws.readyState]
  );

  const wsDisconnect = useCallback(() => {
    StompClient.disconnect(() => {
      // 구독할떄 콘솔보면 id:sub-0 가 이래서 비구독은 아래처럼
      StompClient.unsubscribe("sub-0");
      clearTimeout(waitForConnect);
    });
  }, [StompClient, waitForConnect]);

  useEffect(() => {
    wsSubscribe();
    // 메모: disconnect 잠깐 봉인
    // return () => wsDisconnect();
  }, []);

  // 버튼으로 채팅 보내기
  const SendMessage = () => {
    if (messageData === "") {
      // 빈 메시지 칸 처리
      return;
    }
    const data = {
      userId: userId,
      chatRoomId: chatRoomId,
      modifiedAt: "2022-07-24T11:12:42.032",
      message: messageData,
    };

    waitForConnect(StompClient, () => {
      StompClient.send(`/pub/templates/chat/message`, {}, JSON.stringify(data));
    });
    inputRef.current.value = "";
  };

  return (
    <FlexColumnDiv>
      <StHeader>
        <BackButton />
        <StOtherProfile img={data?.otherProfileImg} />
        <StOtherName>{data?.otherNickName}</StOtherName>
      </StHeader>
      <StBody>
        <StChatContainer chats={data?.chatMessageDataList} />
        <StInputDiv>
          <StMyProfile img={message} />
          <StDiv>
            <input
              type="text"
              className="commentInput"
              placeholder="메세지를  입력해주세요."
              onChange={addMessage}
              ref={inputRef}
            />
            <button className="commentButton" onClick={SendMessage}>
              게시
            </button>
          </StDiv>
        </StInputDiv>
      </StBody>
    </FlexColumnDiv>
  );
};

export default ChatSubscribe;

const StHeader = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 100%;
  height: 49px;
  margin-top: 44px;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
`;

const StBody = styled.div`
  ${flex({ direction: "column", justify: "space-between" })}
  width: 100%;
  height: calc(100vh - 200px);
`;

const StOtherProfile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-left: 14px;
  background-image: url(${(data) => data.img});
  background-size: cover;
  background-position: center;
`;

const StMyProfile = styled(StOtherProfile)`
  width: 40px;
  height: 40px;
  margin-left: 0px;
`;

const StInputDiv = styled.div`
  ${flex({ justify: "flex-start" })}
  position: fixed;
  width: calc(100% - 32px);
  height: 50px;
  top: calc(100vh - 118px);

  @media screen and (min-width: 420px) {
    width: 384px;
  }
`;

const StOtherName = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 130%;
  margin-left: 8px;
  color: #212121;
`;

const StDiv = styled.div`
  ${flex({ justify: "space-around" })}
  width: 100%;
  height: 40px;
  margin-left: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  .commentInput {
    width: calc(100% - 100px);
    border: none;
    background-color: transparent;
    white-space: normal;
    text-align: justify;
    margin-left: 10px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 11px;
    }
  }
  .commentButton {
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4876ef;
    margin-right: 15px;
  }
`;
