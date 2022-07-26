import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetChatSetting from "components/Hooks/ChatList/useGetChatSetting";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import BackButton from "components/Common/BackButton";
import temp from "assets/img/Moon.webp";

const ChatSubscribe = () => {
  const { chatRoomId } = useParams();
  const SockJs = new SockJS(`${process.env.REACT_APP_SERVER}/ws-stomp`);
  const StompClient = Stomp.over(SockJs);
  const { userId } = useSelector((state) => state.userReducer);

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
        });
      },
      (e) => {
        console.log(e);
      }
    );
  }, [StompClient, chatRoomId]);

  // 0. stomp에 waitforConnect 추가 -> 자동으로 재연결 해주는친구
  // disconnect 할때, 구독한것도 취소해줘야하고, 자동연결도 cleanup 해줘야한다.
  const waitForConnect = useCallback(
    (ws, callback) => {
      setTimeout(() => {
        if (StompClient.ws.readyState === 1) {
          callback();
        } else {
          waitForConnect(ws, callback);
        }
      }, 0.1);
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
  }, [wsSubscribe, wsDisconnect]);

  // 채팅 재연결 코드

  return (
    <>
      <StHeader>
        <BackButton />
        <StOtherProfile img={data?.otherProfileImg} />
        <StOtherName>{data?.otherNickName}</StOtherName>
      </StHeader>
    </>
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

const StOtherProfile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-left: 14px;
  background-image: url(${(data) => data.img});
  background-size: cover;
  background-position: center;
`;

const StOtherName = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 130%;
  margin-left: 8px;
  color: #212121;
`;
