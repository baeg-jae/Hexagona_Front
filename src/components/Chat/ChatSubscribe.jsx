import { useEffect, useCallback, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import BackButton from "components/Common/BackButton";
import { FlexColumnDiv } from "components/Common/GlobalStyles";
import { __prevPostChat } from "redux/modules/chat";
import useGetUser from "components/Hooks/User/useGetUser";

const ChatSubscribe = () => {
  const { chatRoomId } = useParams();
  const { data } = useGetUser();
  const SockJs = new SockJS(`${process.env.REACT_APP_SERVER}/ws-stomp`);
  const StompClient = Stomp.over(SockJs);
  const { userId, nickname } = useSelector((state) => state.userReducer);
  const { post_list } = useSelector((state) => state.chatReducer);
  const [messageData, setMessage] = useState("");
  const [publicChats, setPublicChats] = useState([]);
  const messageScroll = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const wsSubscribe = useCallback(() => {
    StompClient.connect(
      {},
      () => {
        StompClient.subscribe(`/sub/chat/room/${chatRoomId}`, (data) => {
          // 로직
          const response = JSON.parse(data);
          console.log(response);
          setPublicChats([publicChats, ...response]);
        });
      },
      (e) => {
        console.log(e);
      }
    );
  }, [StompClient, chatRoomId, publicChats]);

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
      }, 1000);
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
    // 옛날 채팅 보여주기
    dispatch(__prevPostChat({ userId: userId, chatRoomId: chatRoomId }));
    wsSubscribe();
    // 오류: disconnect할때 오류있음 가끔
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

  // 지금 쓰는 채팅 가져오기
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
  }, [post_list]);

  return (
    <FlexColumnDiv>
      <StHeader>
        <BackButton />
        <StOtherProfile img={post_list?.otherProfileImg} />
        <StOtherName>{post_list?.otherNickName}</StOtherName>
      </StHeader>
      <StBody>
        <StWrap ref={messageScroll}>
          {post_list?.chatMessageDataList?.map((v, i) => {
            return v.userNickname === nickname ? (
              <StFlexRow key={i}>
                <StChatContentContainer me>
                  <StChatContent me>{v.message}</StChatContent>
                </StChatContentContainer>
                <StMyProfile img={data?.profile_img} />
              </StFlexRow>
            ) : (
              <StFlexRow key={i}>
                <StMyProfile img={post_list?.otherProfileImg} />
                <StChatContentContainer>
                  <StChatContent>{v.message}</StChatContent>
                </StChatContentContainer>
              </StFlexRow>
            );
          })}
          {
            // 내가 현재 보내는 채팅 목록
            // 유저 분류
          }
        </StWrap>
        <StInputDiv>
          <StMyProfile img={data?.profile_img} />
          <StDiv>
            <input
              type="text"
              className="commentInput"
              placeholder="메세지를  입력해주세요."
              onChange={addMessage}
              ref={inputRef}
              maxLength={250}
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
  background-image: url(${(data) => data.img});
  background-size: cover;
  background-position: center;
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

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: calc(100% - 32px);
  height: calc(var(--vh) * 70);
  margin-top: 31px;
  overflow-y: scroll;
`;

const StChatContentContainer = styled.div`
  ${flex({ direction: "column" })}
  width: 277px;
  padding: 10px;
  background: ${(props) => (props.me ? "#f8f8f8" : "#55977A")};
  border-radius: ${(props) =>
    props.me ? "30px 30px 0 30px" : "30px 30px 30px 0"};
  margin: 10px;
`;

const StChatContent = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  color: ${(props) => (props.me ? "#393939" : "#fff")};
`;

const StFlexRow = styled.div`
  ${flex({ justify: "space-evenly", align: "flex-end" })}
  width: 100%;
`;
