import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { useCallback } from "react";

const ChatSubscribe = () => {
  const { chatRoomId } = useParams();
  const SockJs = new SockJS(`${process.env.REACT_APP_SERVER}/ws-stomp`);
  const StompClient = Stomp.over(SockJs);

  const wsSubscribe = useCallback(() => {
    StompClient.connect(
      {},
      () => {
        StompClient.subscribe(`/sub/chat/room/${chatRoomId}`, (message) => {
          const data = JSON.parse(message.body);
        });
      },
      (e) => {
        console.log(e);
      }
    );
  }, [StompClient, chatRoomId]);

  const wsDisconnect = useCallback(() => {
    StompClient.disconnect();
  }, [StompClient]);

  useEffect(() => {
    wsSubscribe();
    return () => wsDisconnect();
  }, [wsSubscribe, wsDisconnect]);

  return <div></div>;
};

export default ChatSubscribe;
