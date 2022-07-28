import styled from "@emotion/styled";
import flex from "components/Common/flex";
import useGetChatListSetting from "components/Hooks/ChatList/useGetChatListSetting";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatList = ({ keyword }) => {
  const { userId } = useSelector((state) => state.userReducer);
  const { data } = useGetChatListSetting({ userId: userId });
  const navigate = useNavigate();

  const onClickChatRoomHandler = useCallback(
    (RoomId) => {
      if (data.chatRoomList !== undefined) navigate(`/chat/${RoomId}`);
    },
    [data.chatRoomList, navigate]
  );
  return (
    <StChatWrap>
      {data?.chatRoomList?.map((v, i) => {
        return (
          v.otherNickName.toLowerCase().includes(keyword.toLowerCase()) && (
            <StChat
              onClick={() => onClickChatRoomHandler(v.chatRoomId)}
              key={i}
            >
              <StChatHeader>
                <StChatHeaderImg otherProfileImg={v.otherProfileImg} />
                <span>{v.otherNickName}</span>
              </StChatHeader>
              <StChatDec>{v.lastChat}</StChatDec>
            </StChat>
          )
        );
      })}
    </StChatWrap>
  );
};

export default ChatList;
const StChatWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
`;

const StChat = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: calc(100% - 32px);
  height: 81px;
  margin-top: 18px;
  border-bottom: 1px solid #e9e9e9;
`;
const StChatHeader = styled.div`
  width: 100%;
  ${flex({ direction: "row", justify: "flex-start" })}
  .span {
    font-size: 18px;
  }
`;
const StChatHeaderImg = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${(data) => data.otherProfileImg});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin-right: 9px;
`;
const StChatDec = styled.div`
  margin-top: 7.8px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
