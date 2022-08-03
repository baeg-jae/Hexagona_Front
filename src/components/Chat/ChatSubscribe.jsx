import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StInputDivGlobal } from "components/Common/GlobalStyles";
import { __prevPostChat } from "redux/modules/chat";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import BackButton from "components/Common/BackButton";
import useGetUser from "components/Hooks/User/useGetUser";

const ChatSubscribe = () => {
  const SockJs = new SockJS(`${process.env.REACT_APP_SERVER}/ws-stomp`);
  const StompClient = Stomp.over(SockJs);
  const { chatRoomId } = useParams();
  const { data } = useGetUser();
  const { userId, nickname } = useSelector((state) => state.userReducer);
  const { post_list } = useSelector((state) => state.chatReducer);
  const [messageData, setMessage] = useState("");
  const [publicChats, setPublicChats] = useState([]);
  const messageScroll = useRef();
  const dispatch = useDispatch();
  const inputRef = useRef();

  const time =
    new Date(Date.now()).getFullYear() +
    "-" +
    (new Date(Date.now()).getMonth() + 1) +
    "-" +
    new Date(Date.now()).getDate() +
    "T" +
    new Date(Date.now()).getHours() +
    ":" +
    new Date(Date.now()).getMinutes() +
    ":" +
    new Date(Date.now()).getSeconds() +
    ".032";

  const now =
    new Date(Date.now()).getFullYear() +
    "년 " +
    "0" +
    (new Date(Date.now()).getMonth() + 1) +
    "월 0" +
    new Date(Date.now()).getDate() +
    "일";

  const wsSubscribe = () => {
    StompClient.debug = null;
    StompClient.connect(
      {},
      () => {
        StompClient.subscribe(`/sub/chat/room/${chatRoomId}`, (data) => {
          const response = JSON.parse(data.body);
          // 내가 보낸채팅, 상대가 보낸 채팅을 response로 받아서 state 배열 관리
          setPublicChats((list) => [...list, response]);
        });
      },
      () => {
        //에러검사
      }
    );
  };

  // 자동 재연결
  const waitForConnect = (ws, callback) => {
    setTimeout(() => {
      if (StompClient.ws.readyState === 1) {
        callback();
      } else {
        waitForConnect(ws, callback);
      }
    }, 0.1);
  };

  // disconnect
  const wsDisconnect = () => {
    StompClient.disconnect(() => {
      // 구독할떄 콘솔보면 id:sub-0 가 이래서 비구독은 아래처럼
      StompClient.unsubscribe("sub-0");
      clearTimeout(waitForConnect);
    });
  };

  useEffect(() => {
    // 이전 채팅 보여주기
    dispatch(__prevPostChat({ userId: userId, chatRoomId: chatRoomId }));
  }, []);

  useEffect(() => {
    // 연결도 끊어지면 다시 되게
    wsSubscribe();
    return () => wsDisconnect();
    // 디펜던시 주면 안됨
  }, []);

  // 채팅 보내기
  const SendMessage = () => {
    if (inputRef.current.value === "") {
      return;
    }
    const data = {
      userId: userId,
      receiverId: post_list?.otherId,
      chatRoomId: chatRoomId,
      modifiedAt: time,
      message: messageData,
    };
    waitForConnect(StompClient, () => {
      StompClient.debug = null; // console 안보기
      StompClient.send(`/pub/templates/chat/message`, {}, JSON.stringify(data));
    });
    inputRef.current.value = "";
  };

  // onChange
  const addMessage = (e) => {
    setMessage(e.target.value);
  };

  // 채팅 스크롤 관리
  const scrollToBottom = () => {
    if (messageScroll.current) {
      messageScroll.current.scrollTop = messageScroll.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [post_list, publicChats]);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      SendMessage();
    }
  };

  return (
    <>
      <StHeader>
        <BackButton link="/chat" />
        <StOtherName>{post_list?.otherNickName}</StOtherName>
        <StOtherProfile img={post_list?.otherProfileImg} />
      </StHeader>
      <StBody>
        <StWrap ref={messageScroll}>
          <StDate>{now}</StDate>
          {
            // 내가 예전에 주고받은 채팅 기록
            post_list?.chatMessageDataList?.map((v, i) => {
              return v.userNickname === nickname ? (
                <StFlexRow key={i}>
                  <MyChatFlexColumnDiv>
                    <StChatContentContainer me>
                      <StChatContent me>{v.message}</StChatContent>
                    </StChatContentContainer>
                    <StTime me>{v.messageModifiedTime}</StTime>
                  </MyChatFlexColumnDiv>
                </StFlexRow>
              ) : (
                <StFlexRow key={i}>
                  <StMyProfile img={post_list?.otherProfileImg} />
                  <ChatFlexColumnDiv>
                    <StChatContentContainer>
                      <StChatContent>{v.message}</StChatContent>
                    </StChatContentContainer>
                    <StTime>{v.messageModifiedTime}</StTime>
                  </ChatFlexColumnDiv>
                </StFlexRow>
              );
            })
          }
          {
            // 내가 현재 보내고 받는 실시간 채팅 목록
            publicChats?.map((v, i) => {
              return v.userId === userId ? (
                <StFlexRow key={i}>
                  <MyChatFlexColumnDiv>
                    <StChatContentContainer me>
                      <StChatContent me>{v.message}</StChatContent>
                    </StChatContentContainer>
                    <StTime me>{v.messageModifiedTime}</StTime>
                  </MyChatFlexColumnDiv>
                </StFlexRow>
              ) : (
                <StFlexRow key={i}>
                  <StMyProfile img={post_list?.otherProfileImg} />
                  <ChatFlexColumnDiv>
                    <StChatContentContainer>
                      <StChatContent>{v.message}</StChatContent>
                    </StChatContentContainer>
                    <StTime>{v.messageModifiedTime}</StTime>
                  </ChatFlexColumnDiv>
                </StFlexRow>
              );
            })
          }
        </StWrap>
        <StInputDiv>
          <StMyProfile img={data?.profile_img} />
          <StInputDivGlobal>
            <input
              type="text"
              className="commentInput"
              placeholder="메시지를 입력해주세요."
              onChange={addMessage}
              ref={inputRef}
              maxLength={250}
              onKeyPress={onKeyPress}
            />
            <button className="commentButton" onClick={SendMessage}>
              보내기
            </button>
          </StInputDivGlobal>
        </StInputDiv>
      </StBody>
    </>
  );
};

export default ChatSubscribe;

const StHeader = styled.div`
  ${flex({ justify: "space-between" })}
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 18px;
`;

const StBody = styled.div`
  ${flex({ direction: "column", justify: "space-between" })}
  width: 100%;
  max-height: calc(100% - 240px);
`;

const StOtherProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 16px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

const StMyProfile = styled(StOtherProfile)`
  width: 40px;
  height: 40px;
  margin-left: 16px;
  background-image: url(${(props) => props.img});
`;

const StInputDiv = styled.div`
  ${flex({})}
  position: absolute;
  width: calc(100% - 32px);
  height: 50px;
  bottom: 88px;
  background-color: white;
`;

const StOtherName = styled.span`
  font-weight: 700;
  font-family: Pretendard_Bold;
  font-size: 14px;
  line-height: 17px;
  color: #393939;
`;

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  margin-top: 31px;
  overflow-y: scroll;
`;

const StDate = styled.div`
  font-size: 13px;
  background-color: var(--gray-1);
  padding: 5px 10px;
  border-radius: 10px;
`;

const MyChatFlexColumnDiv = styled.div`
  ${flex({ direction: "column", align: "flex-end" })};
  width: 100%;
  margin-right: 16px;
`;

const ChatFlexColumnDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })};
  width: 100%;
`;

const StChatContentContainer = styled.div`
  ${flex({ direction: "column", items: "flex-end" })}
  // 여기가 채팅 말풍선
  max-width: 230px;
  padding: 4px 16px;
  background: ${(props) => (props.me ? "#006FFD" : "var(--gray-1)")};
  border-radius: ${(props) =>
    props.me ? "30px 30px 0 30px" : "30px 30px 30px 0"};
  margin: 10px -0px 4px 0px;
`;

const StChatContent = styled.span`
  line-height: 28px;
  color: ${(props) => (props.me ? "var(--white)" : "var(--gray-10)")};
`;

const StFlexRow = styled.div`
  ${flex({ justify: "space-evenly", align: "flex-end" })};
  width: 100%;
`;

const StTime = styled.span`
  display: flex;
  justify-content: ${(props) => (props.me ? "flex-end" : "flex-start")};
  width: 100%;
  font-size: 10px;
  color: var(--gray-6);
`;
